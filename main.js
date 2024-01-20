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
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found!");
      }

      return response.json();
    })
    .then((data) => displayUser(data))
    .catch((error) => {
      console.error(error);
      displayErrorMessage("User not found. Please try again...");
      setTimeout(clearErrorMessage, 2000);
    });
}

function displayUser(user) {
  userContainer.innerHTML = `
        <img class="profilePic" src = "${user.avatar_url}">
        
        <h3 class = "user-fullName">Name: ${user.name}</h3>
        
        <h3 class = "userName">Username: ${user.login}</h3>
        
        <p class = "bio">Bio: ${user.bio}</p>
        
        <h5 class = "followers">Followers: ${user.followers}</h5>
        
        <h5 class = "following">Following: ${user.following}</h5>
        
    `;
}

function displayErrorMessage(message) {
  userContainer.innerHTML = `<p class="error">${message}</p>`;
}
function clearErrorMessage() {
  userContainer.innerHTML = "";
}
