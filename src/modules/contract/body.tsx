import { useSearch } from "../../providers/search-context";
import ContractContent from "./content";

const ContractBody = () => {
  const { isFetching, failed } = useSearch();

  if (isFetching) {
    return <p className="text-lg text-white">Fetching contract...</p>;
  }

  if (failed) {
    return (
      <p className="text-lg text-gray-300">
        Failed to fetch the smart contract. Maybe it doesn't exist?
      </p>
    );
  }

  return <ContractContent />;
};

export default ContractBody;
