import Modal from "../../../components/Modal";
import ContractTableModalContent from "./modal-content";

interface ContractTableModalProps {
  open: boolean;
  close: () => void;
}
const ContractTableModal = ({ open, close }: ContractTableModalProps) => {
  return (
    <Modal close={close} open={open}>
      <div className="inline-block w-full max-w-2xl lg:max-w-5xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-neutral-800 shadow-xl rounded-2xl">
        <ContractTableModalContent />
      </div>
    </Modal>
  );
};

export default ContractTableModal;
