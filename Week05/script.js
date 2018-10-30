//Create table
var newTable = document.createElement("table");

var newHeader = document.createElement("thead");

var headRow = document.createElement("tr");

for(var i = 1; i <= 4; i++){
  var headerElement = document.createElement("th");
  headerElement.textContent = "Header " + i;
  headRow.appendChild(headerElement);
}

newHeader.appendChild(headRow);
newTable.appendChild(newHeader);

var newBody = document.createElement("tbody");

for(var j = 1; j < 4; j++){
  var newRow = document.createElement("tr");

  for(var k = 1; k <= 4; k++){
    var elContent = document.createElement("td");
    elContent.textContent = j + ", " + k;
    elContent.style.border = "1px solid black";
    newRow.appendChild(elContent);
  }

  newBody.appendChild(newRow);
}
newTable.appendChild(newBody);

document.body.appendChild(newTable);

//Set up variables to access elements
var row = 0;
var col = 0;

var tableBody = document.getElementsByTagName("tbody")[0];
var navRow = tableBody.firstElementChild;
console.log(navRow);

var chosenCell = navRow.firstElementChild;

//Create directional buttons
var upButton = document.createElement("button");
upButton.textContent = "up";
upButton.addEventListener("click", () => {
  //If not at top of the table, move selector up
  if(row != 0){
    row--;
    navRow = navRow.previousElementSibling;
    chosenCell = navRow.children[col];
    chosenCell.style.border = "3px solid black";
  }
});
document.body.appendChild(upButton);



var downButton = document.createElement("button");
downButton.textContent = "down";
downButton.addEventListener("click", () => {
  //If not at top of the table, move selector up
  if(row != 3){
    row++;
    navRow = navRow.nextElementSibling;
    chosenCell = navRow.children[col];
    chosenCell.style.border = "3px solid black";
  }
});

document.body.appendChild(downButton);



var leftButton = document.createElement("button");
leftButton.textContent = "left";
document.body.appendChild(leftButton);

var rightButton = document.createElement("button");
rightButton.textContent = "right";
document.body.appendChild(rightButton);

var space = document.createElement("p");
document.body.appendChild(space);

/*
var selected = document.getElementsByTagName("td"[1][0]);
selected.style.border "3px solid black";

//Select cell based on directional button pressed
function moveSelection (direction){

}

*/
//Create Mark Cell button
var markCell = document.createElement("button");
markCell.textContent = "Mark Cell";
markCell.addEventListener("click", changeBackground);
document.body.appendChild(markCell);

//Allow Mark Cell to change background color of selected cell
function changeBackground(event){
  var toChange = document.getElementsByTagName("td");

  if(toChange.style.backgroundColor != "yellow"){
    toChange.style.backgroundColor = "yellow";
  }

}
