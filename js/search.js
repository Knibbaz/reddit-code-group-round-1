var allCoins;
getAllCoins();
function getAllCoins() {
  const HTTP_REQUEST = "https://api.coingecko.com/api/v3/coins/list?include_platform=false";
  axios.get(HTTP_REQUEST)
  .then((result) => {
    allCoins = result.data.map((everyCoin) => { 
      return {
        id: everyCoin.id,
        name: everyCoin.name.toLowerCase(),
        wlen: everyCoin.name.length
      }
    })
  })
  .catch(() => window.setTimeout(getAllCoins, 10000));
}

document.getElementById("my-data").addEventListener("submit", (e)=>{
  e.preventDefault();
  let inputElement = document.getElementById("search-for");
  let userInput = inputElement.value.trim().toLowerCase();
  setValueAs(userInput);
});

var idInterval;
document.getElementById("search-for").addEventListener("focusin", ()=> idInterval = window.setInterval(searcher, 25));
document.getElementById("search-for").addEventListener("focusout", (unsetSearcher)=>{ clearInterval(idInterval)});

var beforeValueInUserInput = '';
function searcher() {
  let inputElement = document.getElementById("search-for");
  let userInput = inputElement.value.trim().toLowerCase();
  
  if (userInput == beforeValueInUserInput) return 0;
  if (userInput == "") return document.getElementById('list').innerHTML = '';
  if (!(allCoins instanceof Array)) return 0;
  
  let ans = allCoins.filter(el => el.name.includes(userInput));
   ans = ans.sort((a, b) => {
    if (a.wlen > b.wlen) return 1;
    if (!(a.wlen > b.wlen)) return -1;
    if (b.name.startsWith(userInput)) return 1;
    if (!(b.name.startsWith(userInput))) return -1;
    return 0;
  });
  
  ans = ans.slice(0, 10);
  buildSuggestions(ans);
  beforeValueInUserInput = userInput;
}
function clearList() {
  let list = document.getElementById('list');
  list.innerHTML = '';
}

function buildSuggestions(data) {
  clearList();
  data.forEach((item, i) => {
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('onclick', `setValueAs("${item.id}")`);
    button.innerText = item.name;
    list.appendChild(button);
  });
  
}

function setValueAs(id) {
  // document.getElementById("search-for").value = str;
  let inputElement = document.getElementById("search-for");
  inputElement.value = '';
  clearList();
  
  var HTTP_REQUEST =  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=1&page=1&sparkline=false`;
  axios.get(HTTP_REQUEST)
  .then((result) => {
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
        document.getElementById('display-searched').appendChild(div);
      });
      
    })
    
    if (result.data.length == 0) {
      let m = new Massage();
      m.send('Crypto not Found', 'error');
    }else {
      document.getElementById('label-to-searched').classList.remove('hide');
    }
    
  });
}
  
