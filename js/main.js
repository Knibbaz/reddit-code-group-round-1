let form = document.getElementById("my-data");
form.addEventListener("submit", searcher);

function searcher(e) {
  e.preventDefault();
  let inputElement = document.getElementById("search-for");
  let userInput = inputElement.value.trim();
  console.log(userInput);

  axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${userInput}&vs_currencies=usd`).then((result) => {
    console.log(result.data[userInput].usd);
  });
}
