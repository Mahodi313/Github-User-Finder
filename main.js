// SELECTORS
let userContainer = document.querySelector(".user-container");
let searchForm = document.querySelector(".searchForm");
let searchBar = document.querySelector("#search_bar");

let url = "https://api.github.com/users/";

// EVENT LISTENERS
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  searchUser(searchBar.value);
});

// METHODS
function searchUser(searchValue) {
  fetch(url + searchValue)
    .then((response) => response.json())
    .then((data) => displayUser(data));
}

function displayUser(user) {}
