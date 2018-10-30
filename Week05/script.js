/******************************************************************************
CS 290:  Web Development
Author: Clarissa Gasiciel
Date Modified: October 29, 2018
Description:  Javascript for DOM and Events assignment
******************************************************************************/

//Create table
var newTable = document.createElement("table");
newTable.style.border = "1px solid black";

var newHeader = document.createElement("thead");

var headRow = document.createElement("tr");

for(var i = 1; i <= 4; i++){
  var headerElement = document.createElement("th");
  headerElement.textContent = "Header " + i;
  headerElement.style.border = "1px solid black";
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

var chosenCell = navRow.firstElementChild;
chosenCell.style.border = "3px solid black";

//Create directional buttons
var upButton = document.createElement("button");
upButton.textContent = "up";
upButton.addEventListener("click", () => {
  //If not at top of the table, move selector up
  if(row > 0){
    chosenCell.style.border = "1px solid black";
    return moveSelection("up");
  }
});
document.body.appendChild(upButton);



var downButton = document.createElement("button");
downButton.textContent = "down";
downButton.addEventListener("click", () => {
  if(row < 2){
    chosenCell.style.border = "1px solid black";
    return moveSelection("down");
    }
  });

document.body.appendChild(downButton);



var leftButton = document.createElement("button");
leftButton.textContent = "left";
leftButton.addEventListener("click", () => {
  if(col > 0){
    chosenCell.style.border = "1px solid black";
    return moveSelection("left");
  }
});
document.body.appendChild(leftButton);



var rightButton = document.createElement("button");
rightButton.textContent = "right";
rightButton.addEventListener("click", () => {
  if(col < 3){
    chosenCell.style.border = "1px solid black";
    return moveSelection("right");
  }
});
document.body.appendChild(rightButton);



var space = document.createElement("p");
document.body.appendChild(space);


//Select cell based on directional button pressed
function moveSelection (direction){
  if(direction == "up"){
    row--;
    navRow = navRow.previousElementSibling;
    chosenCell = navRow.children[col];
    chosenCell.style.border = "3px solid black";
  }

  else if(direction == "down"){
    //If not at top of the table, move selector up
      row++;
      navRow = navRow.nextElementSibling;
      chosenCell = navRow.children[col];
  }

  else if(direction =="left"){
    col--;
    chosenCell = navRow.children[col];
  }

  else if(direction == "right"){
    col++;
    chosenCell = navRow.children[col];
  }

  chosenCell.style.border = "3px solid black";
}


//Create Mark Cell button
var markCell = document.createElement("button");
markCell.textContent = "Mark Cell";
markCell.addEventListener("click", changeBackground);
document.body.appendChild(markCell);

//Allow Mark Cell to change background color of selected cell
function changeBackground(){
  if(chosenCell.style.backgroundColor != "yellow"){
    chosenCell.style.backgroundColor = "yellow";
  }

}
