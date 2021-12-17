import { useState } from "react";
import ContractActionProvider from "../../../providers/contract-actions";
import { ABIActionsProps } from "../../../typings/abi";
import ContractTableActions from "./modal-actions";

interface ContractListActionProps {
  action: ABIActionsProps;
}
const ContractListAction = ({ action }: ContractListActionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ContractActionProvider action={action}>
      <ContractTableActions close={() => setOpen(false)} open={open} />

      <li className="m-1">
        <button
          onClick={() => setOpen(true)}
          type="button"
          className="bg-neutral-700 hover:bg-neutral-800 text-neutral-300 py-2 px-6 rounded-lg"
        >
          {action.name}
        </button>
      </li>
    </ContractActionProvider>
  );
};

export default ContractListAction;
