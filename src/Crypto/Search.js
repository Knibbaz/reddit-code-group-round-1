import { Row, Col, Image, Form, Button } from "react-bootstrap";

function Search() {
  // Install axios with npm
  // Create a function with axios to get the data from the API
  // Try to console.log() the data that you received

  // Try to put the received data in the webpage using `useState`
  // Example: const [data, setData] = useState(0);
  // For this to work, you need to import the useState from the 'react' package
  // import React, { useState } from 'react';

  return (
    <Form action="#" method="post" id="my-data">
      <Row>
        <Col>
          <Form.Control type="text" id="search-for" placeholder="What are you looking for?" autofocus autocomplete="off" />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            <Image src="images/search.png" alt="Search icon" />
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Search;
