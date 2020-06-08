// variables for highscore function
var initialsInput = document.querySelector("#initials-text");
var initialsForm = document.querySelector("#initials-form");
var initialsList = document.querySelector("#initials-list");
var initialsScores = [];

init();

function renderInitials() {
  // Clear initialsList element and update todoCountSpan
  initialsList.innerHTML = "";

  // Render a new li for each todo
  for (var i = 0; i < initialsScores.length; i++) {
    var initial = initialsScores[i];

    var li = document.createElement("li");
    li.textContent = initial;
    li.setAttribute("data-index", i);

    initialsList.appendChild(li);
  }
}

function init() {
    var storedInitials = JSON.parse(localStorage.getItem("initialsScores"));
  
    // If initials were retrieved from localStorage, update the array to it
    if (storedInitials !== null) {
      initialsScores = storedInitials;
    }
  
    // Render initials to the DOM
    renderInitials();
  }

