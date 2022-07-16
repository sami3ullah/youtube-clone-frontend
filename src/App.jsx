import Menu from "./components/Menu/Menu.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Container, Main, Wrapper } from "./styled/App.styledcomponent";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="App">
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>Hello</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
