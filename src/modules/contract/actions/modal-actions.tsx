import Modal from "../../../components/Modal";
import ContractActionModalContent from "./modal-content";

interface ContractActionsModalProps {
  open: boolean;
  close: () => void;
}
const ContractTableActions = ({ open, close }: ContractActionsModalProps) => {
  return (
    <Modal close={close} open={open}>
      <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-neutral-800 shadow-xl rounded-2xl">
        <ContractActionModalContent />
      </div>
    </Modal>
  );
};

export default ContractTableActions;
