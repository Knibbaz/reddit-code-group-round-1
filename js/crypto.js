axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false").then((result) => {
  let html = `<div class="pair">
                <span>Name</span>
                <span>Current Price</span> 
                <span>Market Cap</span> 
              </div>`;

  result.data.forEach((crypto) => {
    html =
      html +
        `<li>
          <div class="pair">
            <span>${crypto.name}</span>
            <span>$ ${crypto.current_price}</span> 
            <span>$ ${crypto.market_cap}</span> 
          </div>
        </li>`;
  });

  document.getElementById("cryptos").innerHTML = html;
});
