import AppHeader from "./components/Header";
import ContainerLayout from "./layouts/Container";
import ContractContainer from "./modules/contract/container";
import SearchProvider from "./providers/search-context";

function App() {
  return (
    <SearchProvider>
      <ContainerLayout>
        <ContractContainer />
      </ContainerLayout>
    </SearchProvider>
  );
}

export default App;
