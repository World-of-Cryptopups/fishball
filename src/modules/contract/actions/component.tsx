import { useSearch } from "../../../providers/search-context";

const ContractShowACTIONS = () => {
  const { data } = useSearch();

  if (!data) return <></>;

  return (
    <div className="w-11/12 mx-auto mt-8">
      <h4 className="text-xl font-extrabold text-neutral-300">ACTIONS</h4>

      <ul className="flex items-center flex-wrap mt-4">
        {data.abi?.actions.map((i, index) => (
          <li
            key={index}
            className="bg-neutral-700 hover:bg-neutral-800 text-neutral-300 m-1 py-2 px-6 rounded-lg"
          >
            {i.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractShowACTIONS;
