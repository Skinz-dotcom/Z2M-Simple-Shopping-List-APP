// Declare Global variables.

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let deleteBtn = document.querySelectorAll(".btn");
let listItem = document.querySelectorAll("li");

// Function to identify the input text length.
// This is used for later on, to prevent no text from being added to the list.

function inputLength() {
  return input.value.length;
}

// This is the big function.
// This function creates the new list items and
// adds a delete button to the new items.
// it then re-runs the forEach loops for toggle and delete functions

function createListElement() {
  var li = document.createElement("li");
  var button = document.createElement("button");
  var btnTxt = document.createTextNode("Delete!");

  button.appendChild(btnTxt);
  button.classList.add("btn");

  li.appendChild(document.createTextNode(input.value));
  li.appendChild(button);

  ul.appendChild(li);
  input.value = "";

  listItem = document.querySelectorAll("li");
  listItem.forEach((li) => {
    li.addEventListener("click", toggle);
  });

  deleteBtn = document.querySelectorAll(".btn");
  deleteBtn.forEach((li) => {
    li.addEventListener("click", deleteItem);
  });
}

// this function prevents an item addition if no text is entered on the enter button click.

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// this function prevents an item addition if no text is entered on the enter keypress.

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// this function toggles the .done class

function toggle() {
  this.classList.toggle("done");
}

// This function deletes the list item to be deleted from the list.

function deleteItem() {
  this.parentNode.remove();
}

// Enter button click event listener

button.addEventListener("click", addListAfterClick);

// Enter keypress event listener

input.addEventListener("keypress", addListAfterKeypress);

// forEach loop to look for the event click on each li element.

listItem.forEach((li) => {
  li.addEventListener("click", toggle);
});

// forEach loop to look for the event click on each Delete! button.

deleteBtn.forEach((li) => {
  li.addEventListener("click", deleteItem);
});
