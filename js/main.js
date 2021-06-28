let form = document.getElementById('my-data');
form.addEventListener('submit', searcher)

function searcher(e) {
  e.preventDefault();
  let inputElement = document.getElementById('search-for');
  let userInput = inputElement.value.trim();
  console.log(userInput) 
}
