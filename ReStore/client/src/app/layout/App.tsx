import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import { useState } from "react";
import { Route } from "react-router";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/Catalog/Catalog";
import ProductDetails from "../../features/Catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteTyoe = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      type: paletteTyoe,
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id" component={ProductDetails} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
