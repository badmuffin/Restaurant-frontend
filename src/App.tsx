import { HttpMethodContextProvider } from "./context/HttpMethodProvider";
import Layout from "./Layout";

const App = () => {
  return (
    <HttpMethodContextProvider>
      <Layout />
    </HttpMethodContextProvider>
  );
};

export default App;
