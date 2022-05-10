import { Header } from "./components/Header";
import { BodyTable } from "./components/Table";
import { StorageProvider } from "./utils/storage";

const App = () => {
  return (
    <div>
      <StorageProvider>
        <>
          <Header />
          <BodyTable />
        </>
      </StorageProvider>
    </div>
  );
};

export default App;
