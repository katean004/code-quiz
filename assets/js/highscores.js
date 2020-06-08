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

function storeInitials() {
  // Stringify and set "initialsScores" key in localStorage to array
  localStorage.setItem("initialsScores", JSON.stringify(initialsScores));
}

// When form is submitted...
initialsForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var initialsText = initialsInput.value.trim();

  // Return from function early if submitted text is blank
  if (initialsText === "") {
    return;
  }

  // Add new initials text to array, clear the input
  initialsScores.push(initialsText);
  initialsInput.value = "";

  // Store updated initials in localStorage, re-render the list
  storeInitials();
  renderInitials();
});