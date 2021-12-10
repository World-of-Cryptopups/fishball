import ContractBody from "./body";
import ContractHeader from "./header";

const ContractContainer = () => {
  return (
    <div className="mt-4 p-6 w-11/12 mx-auto">
      <ContractHeader />

      <div className="mt-6">
        <ContractBody />
      </div>
    </div>
  );
};

export default ContractContainer;
