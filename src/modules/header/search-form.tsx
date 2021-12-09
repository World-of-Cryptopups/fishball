import { useRef } from "react";

const SearchForm = () => {
  const inputSearch = useRef<HTMLInputElement>(null);

  return (
    <div className="inline-flex items-center bg-gray-800 p-1 rounded-lg">
      <input
        ref={inputSearch}
        type="text"
        name="search-input"
        maxLength={13}
        className="py-1 px-5 bg-transparent text-gray-300 text-sm tracking-wide font-medium"
      />
      <button
        type="button"
        className="bg-gray-700 hover:bg-gray-600 py-1 px-3 rounded-lg text-sm font-bold text-gray-300"
      >
        load
      </button>
    </div>
  );
};

export default SearchForm;
