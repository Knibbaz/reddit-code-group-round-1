let form = document.getElementById("my-data");
form.addEventListener("submit", searcher);

function searcher(e) {
  e.preventDefault();
  let inputElement = document.getElementById("search-for");
  let userInput = inputElement.value.trim();
  console.log(userInput);

  axios
    .get(`https://api.coingecko.com/api/v3/simple/price?ids=${userInput}&vs_currencies=usd`)
    .then((result) => {
      document.getElementById("customCall").innerHTML = `<h1>${result.data[userInput].usd}</h1>`;
    })
    .catch(() => {
      document.getElementById("customCall").innerHTML = `<h1>CRYPTO NOT FOUND</h1>`;
    });
}
