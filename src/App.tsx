import ContainerLayout from "./layouts/Container";
import ContractContainer from "./modules/contract/container";
import SearchProvider from "./providers/search-context";
import SettingsProvider from "./providers/settings-handler";

function App() {
  return (
    <SettingsProvider>
      <SearchProvider>
        <ContainerLayout>
          <ContractContainer />
        </ContainerLayout>
      </SearchProvider>
    </SettingsProvider>
  );
}

export default App;
