import { createContext, ReactNode, useContext } from "react";
import { ABIActionsProps } from "../typings/abi";

interface ContractActionProviderProps {
  children: ReactNode;
  action: ABIActionsProps;
}

interface ContractActionContextProps {
  action: ABIActionsProps;
}

const ContractActionContext = createContext<ContractActionContextProps>({
  action: { name: "", type: "", ricardian_contract: "" },
});

const ContractActionProvider = ({
  children,
  action,
}: ContractActionProviderProps) => {
  return (
    <ContractActionContext.Provider value={{ action }}>
      {children}
    </ContractActionContext.Provider>
  );
};

export const useContractAction = () => {
  const context = useContext(ContractActionContext);
  if (context === undefined)
    throw new Error("<ContractActionProvider></ContractActionProvider>");

  return context;
};

export default ContractActionProvider;
