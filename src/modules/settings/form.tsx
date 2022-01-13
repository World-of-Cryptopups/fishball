import { Dialog } from "@headlessui/react";
import { useRef } from "react";
import { useSearch } from "../../providers/search-context";
import { useSettings } from "../../providers/settings-handler";

interface SettingsFormProps {
  close: () => void;
}

const SettingsForm = ({ close }: SettingsFormProps) => {
  const { endpoint, save } = useSettings();
  const { reset } = useSearch();

  const inputEndpointRef = useRef<HTMLInputElement>(null);

  const saveHandler = async () => {
    const value = inputEndpointRef.current?.value;
    if (!value) return;

    await save(value);

    reset();
    close();
  };

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-2xl font-black leading-6 text-emerald-500"
      >
        Settings
      </Dialog.Title>

      <Dialog.Description className="mt-2 text-neutral-200">
        Configure your eosio endpoint setting.{" "}
        <i className="text-sm">(Other settings will come soon)</i>
      </Dialog.Description>

      <div className="mt-4">
        <div className="flex flex-col">
          <label htmlFor="endpoint" className="mb-1 text-neutral-300">
            EOSIO Endpoint
          </label>
          <input
            ref={inputEndpointRef}
            type="text"
            name="endpoint"
            className="py-2 px-4 rounded-lg bg-neutral-900 text-white placeholder-neutral-500"
            placeholder="Enter an EOSIO endpoint"
            defaultValue={endpoint}
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="bg-neutral-700 hover:bg-neutral-600 text-gray-200 py-2 px-6 rounded-lg"
          onClick={saveHandler}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default SettingsForm;
