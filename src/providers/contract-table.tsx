import { createContext, ReactNode, useContext } from "react";
import { ABITableProps } from "../typings/abi";

interface ContractTableProviderProps {
  children: ReactNode;
  table: ABITableProps;
}

interface ContractTableContextProps {
  table: ABITableProps;
}

const ContractTableContext = createContext<ContractTableContextProps>({
  table: { name: "", type: "", index_type: "", key_names: [], key_types: [] },
});

const ContractTableProvider = ({
  children,
  table,
}: ContractTableProviderProps) => {
  return (
    <ContractTableContext.Provider value={{ table }}>
      {children}
    </ContractTableContext.Provider>
  );
};

export const useContractTable = () => {
  const context = useContext(ContractTableContext);
  if (context === undefined)
    throw new Error("<ContractTableProvider></ContractTableProvider>");

  return context;
};

export default ContractTableProvider;
