import { Row } from "react-bootstrap";

function Cryptos() {
  // Install axios with npm
  // Create a function with axios to get the data from the API
  // Try to console.log() the data that you received

  // Try to put the received data in the webpage using `useState`
  // Example: const [data, setData] = useState(0);
  // For this to work, you need to import the useState from the 'react' package
  //   import React, { useState } from 'react';

  // You can put the received data in the webpage with {data.map((crypto, index) => {
  //   return (
  //     <li>
  //       <div class="pair">
  //         <span>${crypto.name}</span>
  //         <span>$ ${crypto.current_price}</span>
  //         <span>$ ${crypto.market_cap}</span>
  //       </div>
  //     </li>
  //   )
  //   })}

  return (
    <Row>
      <h1>Top 5 Crypto</h1>
    </Row>
  );
}

export default Cryptos;
