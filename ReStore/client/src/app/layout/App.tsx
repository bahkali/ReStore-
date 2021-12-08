import { Container, CssBaseline } from "@material-ui/core";
import Catalog from "../../features/Catalog/Catalog";
import Header from "./Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog />
      </Container>
    </>
  );
}

export default App;
