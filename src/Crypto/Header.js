import { Row, Col, Image } from "react-bootstrap";

function Header() {
  // This is not the most important part
  
  return (
    <Row>
      <Col>
        <h1>Crypto Moon</h1>
        <Image src="images/astronaut.svg" roundedCircle />
      </Col>
    </Row>
  );
}

export default Header;
