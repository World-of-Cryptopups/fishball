import { useGetTableRows } from "@cryptopuppie/useeoschain";
import { Dialog } from "@headlessui/react";
import { useRef, useState } from "react";
import { useContractTable } from "../../../providers/contract-table";
import { useSearch } from "../../../providers/search-context";
import { useSettings } from "../../../providers/settings-handler";
import ContractTableModalShowTableRows from "./show-table-rows";

const ContractTableModalContent = () => {
  const { endpoint } = useSettings();
  const { query, data: searchData } = useSearch(); // query is the contract name
  const { table } = useContractTable();

  const [options, setOptions] = useState({
    scope: query ?? "",
    lower_bound: "",
    upper_bound: "",
  });

  const inputScopeRef = useRef<HTMLInputElement>(null);
  const inputLowerBoundRef = useRef<HTMLInputElement>(null);
  const inputUpperBoundRef = useRef<HTMLInputElement>(null);

  const data = useGetTableRows<Record<string, any>>(
    { ...options, table: table.name, code: query ?? "" },
    endpoint
  );

  const searchQuery = () => {
    const _scope = inputScopeRef.current?.value ?? "";
    const _lowerBound = inputLowerBoundRef.current?.value ?? "";
    const _upperBound = inputUpperBoundRef.current?.value ?? "";

    setOptions({
      scope: _scope,
      lower_bound: _lowerBound,
      upper_bound: _upperBound,
    });
  };

  return (
    <div>
      <h4 className="text-xl leading-relaxed text-neutral-300 text-right">
        {query}
      </h4>

      <Dialog.Title
        as="h3"
        className="text-3xl font-black leading-6 text-white"
      >
        {table.name}
      </Dialog.Title>

      <Dialog.Description className="mt-2 text-neutral-300">
        View contract table rows.
      </Dialog.Description>

      <div className="mt-6">
        <div className="flex items-end">
          <div className="w-full flex flex-col">
            <label htmlFor="scope" className="text-neutral-300 text-sm">
              Scope
            </label>
            <input
              ref={inputScopeRef}
              type="text"
              name="scope"
              placeholder="Scope"
              defaultValue={query ?? ""}
              className="py-2 px-4 text-sm bg-neutral-900 text-neutral-100 rounded-lg placeholder-neutral-500"
            />
          </div>

          <button
            onClick={searchQuery}
            type="button"
            className="py-2 px-3 ml-2 text-neutral-100 rounded-lg bg-neutral-700 hover:bg-neutral-600 inline-flex items-center text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>

            <span className="ml-1">Search</span>
          </button>
        </div>

        <div className="flex items-center mt-1">
          <div className="w-full flex flex-col m-1">
            <label htmlFor="lower-bound" className="text-neutral-300 text-sm">
              Lower Bound
            </label>
            <input
              ref={inputLowerBoundRef}
              type="text"
              name="lower-bound"
              placeholder="Lower bound"
              className="py-1 px-4 text-sm bg-neutral-900 text-neutral-100 rounded-lg placeholder-neutral-500"
            />
          </div>

          <div className="w-full flex flex-col m-1">
            <label htmlFor="upper-bound" className="text-neutral-300 text-sm">
              Upper Bound
            </label>
            <input
              ref={inputUpperBoundRef}
              type="text"
              name="upper-bound"
              placeholder="Upper bound"
              className="py-1 px-4 text-sm bg-neutral-900 text-neutral-100 rounded-lg placeholder-neutral-500"
            />
          </div>
        </div>

        <hr className="border-neutral-700 my-6" />
      </div>

      <ContractTableModalShowTableRows data={data?.rows ?? []} />
    </div>
  );
};

export default ContractTableModalContent;
