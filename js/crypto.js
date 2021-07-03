callData();
function callData() {
  const HTTP_REQUEST = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false";
  axios.get(HTTP_REQUEST).then((result) => {
    
    document.getElementById('display').innerHTML = '';
    
    result.data.forEach((crypto) => {
      let searchFor = ['image', 'name', 'current_price', 'market_cap'];
      
      searchFor.forEach((item) => {
        let div = document.createElement('div');
        let content;
        if (item == 'image') {
          content = document.createElement('img');
          content.setAttribute('src', crypto[item]);
        } else {
          content = document.createElement('span');
          content.innerText = crypto[item];
        }
        div.appendChild(content);
        document.getElementById('display').appendChild(div);
      });
      
    });
    console.info('Last local update on ', new Date());
  });
  window.setTimeout(callData, 30000);
}
