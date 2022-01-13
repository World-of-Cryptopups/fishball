import { useRef } from "react";
import { useSearch } from "../../providers/search-context";

const SearchForm = () => {
  const { query, search } = useSearch();

  const inputSearch = useRef<HTMLInputElement>(null);

  const load = () => {
    const value = inputSearch.current?.value;
    if (!value) return;

    search(value);
  };

  return (
    <div className="inline-flex items-center bg-neutral-800 p-1 rounded-lg">
      <input
        ref={inputSearch}
        type="text"
        name="search-input"
        maxLength={13}
        placeholder="Load contract name..."
        className="py-1 px-5 bg-transparent text-neutral-300 text-sm tracking-wide font-medium w-full"
      />
      <button
        onClick={load}
        type="button"
        className="bg-emerald-700 hover:bg-emerald-600 py-1 px-3 rounded-lg text-sm font-bold text-neutral-100"
      >
        load
      </button>
    </div>
  );
};

export default SearchForm;
