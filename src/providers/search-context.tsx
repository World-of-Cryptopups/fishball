import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { FetchABIProps } from "../typings/abi";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextProps {
  query: string | null;
  setQuery: Dispatch<SetStateAction<string | null>>;
  isFetching: boolean;
  search: (q: string) => void;
  failed: boolean;
  data?: FetchABIProps;
}

const SearchContext = createContext<SearchContextProps>({
  query: null,
  setQuery: () => null,
  isFetching: false,
  search: (q: string) => {},
  failed: false,
});

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [query, setQuery] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [failed, setFailed] = useState(false);
  const [data, setData] = useState<FetchABIProps | undefined>(undefined);

  const search = async (q: string) => {
    if (q === query) return;

    setQuery(q);
    setIsFetching(true);

    const f: FetchABIProps | undefined = await fetch(
      `https://waxtestnet.greymass.com/v1/chain/get_abi`,
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
