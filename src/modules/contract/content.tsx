import { Tab } from "@headlessui/react";
import { useSearch } from "../../providers/search-context";
import ContractShowABI from "./abi/component";
import ContractShowACTIONS from "./actions/component";
import ContractShowTABLES from "./tables/component";

const ContractContent = () => {
  const { data } = useSearch();

  if (!data)
    return (
      <p className="text-neutral-200 text-lg text-center">
        Search a contract name...
      </p>
    );

  return (
    <Tab.Group>
      <Tab.List className="text-neutral-400 bg-neutral-800 flex items-center justify-center py-1 rounded-xl">
        <Tab
          className={({ selected }) =>
            `hover:text-neutral-300 mx-2 py-1 px-6 rounded-lg ${
              selected ? "bg-neutral-900 text-neutral-300" : ""
            }`
          }
        >
          Tables
        </Tab>
        <Tab
          className={({ selected }) =>
            `hover:text-neutral-300 mx-2 py-1 px-6 rounded-lg ${
              selected ? "bg-neutral-900 text-neutral-300" : ""
            }`
          }
        >
          Actions
        </Tab>
        <Tab
          className={({ selected }) =>
            `hover:text-neutral-300 mx-2 py-1 px-6 rounded-lg ${
              selected ? "bg-neutral-900 text-neutral-300" : ""
            }`
          }
        >
          ABI
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <ContractShowTABLES />
        </Tab.Panel>
        <Tab.Panel>
          <ContractShowACTIONS />
        </Tab.Panel>
        <Tab.Panel>
          <ContractShowABI />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ContractContent;
