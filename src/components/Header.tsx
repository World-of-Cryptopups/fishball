import SearchForm from "../modules/header/search-form";

const AppHeader = () => {
  return (
    <header className="py-4 flex items-center justify-between w-11/12 mx-auto">
      <h1 className="text-2xl tracking-tight font-extrabold text-neutral-300 lowercase">
        fishball
      </h1>

      <SearchForm />
    </header>
  );
};

export default AppHeader;
