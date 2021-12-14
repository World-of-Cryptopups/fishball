import Modal from "../../components/Modal";
import SettingsForm from "./form";

interface SettingsModalProps {
  open: boolean;
  close: () => void;
}

const SettingsModal = ({ open, close }: SettingsModalProps) => {
  return (
    <Modal open={open}>
      <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-neutral-800 shadow-xl rounded-2xl">
        <SettingsForm close={close} />
      </div>
    </Modal>
  );
};

export default SettingsModal;
