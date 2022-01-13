import { useSearch } from "../../../providers/search-context";
import ContractListTable from "./list-tables";

const ContractShowTABLES = () => {
  const { data } = useSearch();

  if (!data) return <></>;

  return (
    <div className="w-11/12 mx-auto mt-8">
      <h4 className="text-xl font-extrabold text-emerald-400">TABLES</h4>

      <ul className="flex items-center flex-wrap mt-4">
        {data.abi?.tables.map((i, index) => (
          <ContractListTable table={i} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ContractShowTABLES;
