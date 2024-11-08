// get element by Id

let parksDropdown = document.getElementById("parksDropdown");
// STEP 1.  Create a function that loads the parks types in the dropdown :)
function loadParkTypeDropdown() {
  for (const park of parkTypesArray) {
    let options = document.createElement("option");
    options.innerText = park;
    options.value = park;
    parksDropdown.appendChild(options);
  }
}
// STEP  1B. Call the function
loadParkTypeDropdown();

// Step 2.  Call your table element
let parksTBody = document.getElementById("parksTBody");

function loadTableData() {
  for (const nationalpark of nationalParksArray) {
    let tableRow = parksTBody.insertRow();

    let tableData = tableRow.insertCell();
    tableData.innerText = nationalpark.LocationName;

    let tableData1 = tableRow.insertCell();
    tableData1.innerText = nationalpark.Address || "N/A";

    let tableData2 = tableRow.insertCell();
    tableData2.innerText = nationalpark.City;

    let tableData3 = tableRow.insertCell();
    tableData3.innerText = nationalpark.State;

    let tableData5 = tableRow.insertCell();
    if (nationalpark.Visit == undefined) {
      tableData5.innerText = "N/A";
    } else {
      let anchorTag = document.createElement("a");
      anchorTag.innerText = " Visit Website";
      anchorTag.href = nationalpark.Visit;
      tableData5.appendChild(anchorTag);
    }
  }
}

loadTableData();

let filterByLocation = document.getElementById("filterByLocation");

function filterTypeChanged() {
  if (filterByLocation.checked) {
    parksDropdown.innerHTML = " ";
    for (const element of locationsArray) {
      let options = document.createElement("option");
      options.innerText = element;
      options.value = element;
      parksDropdown.appendChild(options);
    }
  } else {
    parksDropdown.innerHTML = " ";
    loadParkTypeDropdown();
  }
}

function filterByState() {
  let parkIdValue = parksDropdown.value;
  let filterTypes = nationalParksArray.filter((parkName) => parkName.State === parkIdValue);
  parksTBody.innerHTML = "";
  for (const nationalpark of filterTypes) {
    let tableRow = parksTBody.insertRow();

    let tableData = tableRow.insertCell();
    tableData.innerText = nationalpark.LocationName;

    let tableData1 = tableRow.insertCell();
    tableData1.innerText = nationalpark.Address;

    let tableData2 = tableRow.insertCell();
    tableData2.innerText = nationalpark.City;

    let tableData3 = tableRow.insertCell();
    tableData3.innerText = nationalpark.State;

    let tableData5 = tableRow.insertCell();
    tableData5.innerText = nationalpark.Visit || " N/A";
  }
}

// Create filter function to filter by parktypeand match it with the parksdropdown value. Then we called the filter on the select element
let byParkTypeRadio = document.getElementById("byParkTypeRadio");
function filterByParkType() {
  let parkIdValue = parksDropdown.value;
  let filterTypes = nationalParksArray.filter((parkName) => parkName.LocationName.includes(parkIdValue));
  parksTBody.innerHTML = "";
  for (const nationalpark of filterTypes) {
    let tableRow = parksTBody.insertRow();

    let tableData = tableRow.insertCell();
    tableData.innerText = nationalpark.LocationName;

    let tableData1 = tableRow.insertCell();
    tableData1.innerText = nationalpark.Address;

    let tableData2 = tableRow.insertCell();
    tableData2.innerText = nationalpark.City;

    let tableData3 = tableRow.insertCell();
    tableData3.innerText = nationalpark.State;

    let tableData5 = tableRow.insertCell();
    tableData5.innerText = nationalpark.Visit || " N/A";
  }
}

function filter() {
  if (filterByLocation.checked) {
    filterByState();
  }
  if (byParkTypeRadio.checked) {
    filterByParkType();
  }
}
