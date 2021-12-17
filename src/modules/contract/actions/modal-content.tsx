import { Dialog } from "@headlessui/react";
import { useContractAction } from "../../../providers/contract-actions";
import { useSearch } from "../../../providers/search-context";

const ContractActionModalContent = () => {
  const { query, getStructType } = useSearch(); // query is the contract name
  const { action } = useContractAction();

  const actionData = getStructType(action.name);

  return (
    <div>
      <h4 className="text-xl leading-relaxed text-neutral-300 text-right">
        {query}
      </h4>

      <Dialog.Title
        as="h3"
        className="text-3xl font-black leading-6 text-white"
      >
        {action.name}
      </Dialog.Title>

      <Dialog.Description className="mt-2 text-neutral-300">
        View contract action's fields.
      </Dialog.Description>

      <div className="mt-6 flex justify-center">
        <div>
          {actionData?.fields.map((i, index) => (
            <div className="flex flex-col my-1" key={index}>
              <label htmlFor={i.name} className="text-neutral-300">
                {i.name}
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  name={i.name}
                  className="w-96 py-2 px-4 bg-neutral-900 rounded-l-lg placeholder-neutral-500 text-neutral-100"
                  placeholder={i.name}
                />
                <span className="bg-neutral-700 py-2 px-4 rounded-r-lg text-neutral-100">
                  {i.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractActionModalContent;
