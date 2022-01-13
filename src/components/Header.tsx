import SearchForm from "../modules/header/search-form";
import SettingsButton from "../modules/header/settings-button";

const AppHeader = () => {
  return (
    <header className="py-4 flex items-center justify-between w-11/12 mx-auto">
      <h1 className="text-2xl tracking-tight font-extrabold text-gray-100 lowercase">
        <span className="text-emerald-500">fish</span>ball
      </h1>

      <div className="inline-flex items-center">
        <SearchForm />
        <SettingsButton />
      </div>
    </header>
  );
};

export default AppHeader;
