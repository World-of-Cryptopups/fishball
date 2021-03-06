import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import urljoin from "url-join";
import { ABIStructProps, FetchABIProps } from "../typings/abi";
import { useSettings } from "./settings-handler";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextProps {
  query: string | null;
  setQuery: Dispatch<SetStateAction<string | null>>;
  isFetching: boolean;
  search: (q: string) => void;
  reset: () => void;
  failed: boolean;
  getStructType: (type: string) => ABIStructProps | undefined;
  data?: FetchABIProps;
}

const SearchContext = createContext<SearchContextProps>({
  query: null,
  setQuery: () => null,
  isFetching: false,
  search: (q: string) => {},
  reset: () => null,
  getStructType: () => undefined,
  failed: false,
});

const SearchProvider = ({ children }: SearchProviderProps) => {
  const { endpoint } = useSettings();

  const [query, setQuery] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [failed, setFailed] = useState(false);
  const [data, setData] = useState<FetchABIProps | undefined>(undefined);

  const getStructType = (type: string) => {
    if (!data) return;

    const f = data.abi?.structs.filter((i) => i.name === type);
    if (!f) return;

    return f[0];
  };

  const reset = () => {
    setQuery(null);
    setData(undefined);
    setIsFetching(false);
    setFailed(false);
  };

  const search = async (q: string) => {
    setQuery(q);
    setIsFetching(true);

    const f: FetchABIProps | undefined = await fetch(
      urljoin(endpoint, "v1/chain/get_abi"),
      {
        method: "POST",
        body: JSON.stringify({
          account_name: q,
        }),
      }
    )
      .then((r) => {
        if (r.status !== 200) {
          setFailed(true);
          setIsFetching(false); // stop fetching here too
          return;
        }

        return r.json();
      })
      .catch((e) => {
        setFailed(true);
        setIsFetching(false); // stop fetching here too

        console.error(e);
      });

    if (!f) return;

    // set the fetched request
    setData(f);

    // done
    setIsFetching(false);
    setFailed(false);
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        isFetching,
        search,
        failed,
        data,
        reset,
        getStructType,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("<SearchProvider></SearchProvider>");

  return context;
};

export default SearchProvider;
export { useSearch };
