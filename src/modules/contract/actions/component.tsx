import { useSearch } from "../../../providers/search-context";
import ContractListAction from "./list-actions";

const ContractShowACTIONS = () => {
  const { data } = useSearch();

  if (!data) return <></>;

  return (
    <div className="w-11/12 mx-auto mt-8">
      <h4 className="text-xl font-extrabold text-neutral-300">ACTIONS</h4>

      <ul className="flex items-center flex-wrap mt-4">
        {data.abi?.actions.map((i, index) => (
          <ContractListAction action={i} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ContractShowACTIONS;
