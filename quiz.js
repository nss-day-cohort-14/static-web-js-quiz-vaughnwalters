var enteredHeight = document.getElementById("howTallTree");
var enteredCharacter = document.getElementById("whichCharacter")
var button = document.getElementById("button");
var enter = document.getElementById("button");
var space = " ";
var treeBuilder = "";
var charWidth = 1;


function growTree() {
  enteredHeightValue=enteredHeight.value;
  enteredCharacterValue=enteredCharacter.value;
  var spaces = 1;

  treeBuilder = space.repeat(enteredHeightValue) + enteredCharacterValue;
    console.log("treeBuilder", treeBuilder);

  for (var i=0; i<enteredHeightValue; i++) {
    charWidth += 2;
    treeBuilder = space.repeat(enteredHeightValue - parseInt(spaces)) + enteredCharacterValue.repeat(parseInt(charWidth));
    console.log("treeBuilder", treeBuilder);
    spaces+=1;
  }
  if (enteredHeightValue.length === 0) {
    alert ("Both fields must have values entered");
  }
  else if (enteredCharacterValue.length === 0) {
    alert ("Both fields must have values entered");
  } 
};

function enterEvent() {
  if (event.keyCode===13) { 
    console.log("you pressed enter");
    growTree();
  }
};

button.addEventListener("click", growTree);
enteredHeight.addEventListener("keyup", enterEvent);
enteredCharacter.addEventListener("keyup", enterEvent);

