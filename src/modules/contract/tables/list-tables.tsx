import { useState } from "react";
import ContractTableProvider from "../../../providers/contract-table";
import { ABITableProps } from "../../../typings/abi";
import ContractTableModal from "./modal-table";

interface ContractListTableProps {
  table: ABITableProps;
}
const ContractListTable = ({ table }: ContractListTableProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ContractTableProvider table={table}>
      <ContractTableModal close={() => setOpen(false)} open={open} />

      <li className="m-1">
        <button
          onClick={() => setOpen(true)}
          type="button"
          className="bg-neutral-700 hover:bg-neutral-800 text-neutral-300 py-2 px-6 rounded-lg"
        >
          {table.name}
        </button>
      </li>
    </ContractTableProvider>
  );
};

export default ContractListTable;
