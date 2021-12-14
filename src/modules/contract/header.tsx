import { useSearch } from "../../providers/search-context";

const ContractHeader = () => {
  const { query } = useSearch();

  return (
    <div>
      <h2 className="text-white text-3xl font-extrabold">{query}</h2>
    </div>
  );
};

export default ContractHeader;
