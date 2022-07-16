import Menu from "./components/Menu/Menu.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Container, Main, Wrapper } from "./styled/App.styledcomponent";

function App() {
  return (
    <Container className="App">
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>Hello</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
