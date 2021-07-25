import "./App.css";
import { Navbar } from "./components";
import { ProductsaPage } from "./pages";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box marginTop="4rem">
        <ProductsaPage />
      </Box>
    </div>
  );
}

export default App;
