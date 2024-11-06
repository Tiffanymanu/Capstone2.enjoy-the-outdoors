"use strict";
// Get Elements by ID
const mountainsDropdown = document.getElementById("mountainsDropdown");
const mountainDetailsParagraph = document.getElementById("mountainDetailsParagraph");
const logoImage = document.getElementById("logoImage"); 
const cardTitleHeading = document.getElementById("cardTitleHeading");
// const mountainDetailsButton = document.getElementById("mountainDetailsButton");

// create a function to display the array values as options in the dropdown
function loadMountains() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.textContent = mountain.name;
    option.value = mountain.name;
    mountainsDropdown.appendChild(option);
  }
}
loadMountains();

//  Create a function to show the details when each mountain name is clicked
function showMountainDetails() {
  const mountainName = mountainsDropdown.value;
  for (const mountain of mountainsArray) {
    if (mountain.name == mountainName) {
      logoImage.src = `./images/${mountain.img}`;
        cardTitleHeading.innerText = `Welcome to ${mountain.name} !`;
      const details = ` ${mountain.desc} Effort: ${mountain.effort}` ;
      mountainDetailsParagraph.innerText = details;
    }
  }
}

