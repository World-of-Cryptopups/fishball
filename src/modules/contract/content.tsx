import { Tab } from "@headlessui/react";
import { useSearch } from "../../providers/search-context";
import ContractShowABI from "./abi/component";
import ContractShowACTIONS from "./actions/component";
import ContractShowTABLES from "./tables/component";

const ContractContent = () => {
  const { data } = useSearch();

  if (!data)
    return (
      <p className="text-gray-200 text-lg text-center">
        Search a contract name...
      </p>
    );

  return (
    <Tab.Group>
      <Tab.List className="text-gray-400 bg-gray-800 flex items-center justify-end py-1 rounded-xl">
        <Tab
          className={({ selected }) =>
            `hover:text-gray-300 mx-2 py-1 px-6 rounded-lg ${
              selected ? "bg-gray-900 text-gray-300" : ""
            }`
          }
        >
          Tables
        </Tab>
        <Tab
          className={({ selected }) =>
            `hover:text-gray-300 mx-2 py-1 px-6 rounded-lg ${
              selected ? "bg-gray-900 text-gray-300" : ""
            }`
          }
        >
          Actions
        </Tab>
        <Tab
          className={({ selected }) =>
            `hover:text-gray-300 mx-2 py-1 px-6 rounded-lg ${
              selected ? "bg-gray-900 text-gray-300" : ""
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
