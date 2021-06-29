import { Container } from "react-bootstrap";

import Header from "./Crypto/Header";
import Search from "./Crypto/Search";
import Cryptos from "./Crypto/Cryptos";

function App() {
  return (
    <Container className="text-center center">
      <Header />
      <Search />
      <Cryptos />
    </Container>
  );
}

export default App;
