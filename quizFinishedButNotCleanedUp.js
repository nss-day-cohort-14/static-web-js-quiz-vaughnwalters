console.log("Hello nurse");

var enteredHeight = document.getElementById("howTallTree");
var enteredCharacter = document.getElementById("whichCharacter")
var button = document.getElementById("button");
var enter = document.getElementById("button");
var space = " ";
var treeBuilder = "";
var charWidth = 1;


function growTree() {
  enteredHeightValue=enteredHeight.value;
  // console.log("entered Height Value", enteredHeightValue);
  enteredCharacterValue=enteredCharacter.value;
  // console.log("enteredCharacterValue", enteredCharacterValue);
  var spaces = 1;
  // work on growTree function here

  treeBuilder = space.repeat(enteredHeightValue) + enteredCharacterValue;
    console.log("treeBuilder", treeBuilder);

  for (var i=0; i<enteredHeightValue; i++) {
    charWidth += 2;
    treeBuilder = space.repeat(enteredHeightValue - parseInt(spaces)) + enteredCharacterValue.repeat(parseInt(charWidth));
    console.log("treeBuilder", treeBuilder);
    spaces+=1;
  }
    // treeBuilder = space.repeat(enteredHeightValue) + enteredCharacterValue
    // console.log("treeBuilder", treeBuilder);
    // treeBuilder = space.repeat(enteredHeightValue - parseInt(width)) + enteredCharacterValue.repeat(3);
    // console.log("treeBuilder", treeBuilder);
    // treeBuilder = space.repeat(enteredHeightValue - parseInt(2)) + enteredCharacterValue.repeat(5);
    // console.log("treeBuilder", treeBuilder);
    // treeBuilder = space.repeat(enteredHeightValue - parseInt(3)) + enteredCharacterValue.repeat(7);
    // console.log("treeBuilder", treeBuilder);


  // for (var i=0; i<enteredHeightValue; i++) {
  //   // add enteredHeightValue number of space then add enteredCharacterValue
  //   treeBuilder += space.repeat(enteredHeightValue) + enteredCharacterValue;


  //   console.log("treeBuilder", treeBuilder);
  //   // subtract two from enteredHeightValue and add two enteredCharacterValue
  // }





  if (enteredHeightValue.length === 0) {
    // console.log("enter a height value");
    alert ("Both fields must have values entered");
  }
  else if (enteredCharacterValue.length === 0) {
    // console.log("enter a character value");
    alert ("Both fields must have values entered");
  } 
};

//if return key is pressed, growTree function executes
function enterEvent() {
  if (event.keyCode===13) { 
    console.log("you pressed enter");
    growTree();
  }
};

// event listers for the button click or for return keyup when in input field
button.addEventListener("click", growTree);
enteredHeight.addEventListener("keyup", enterEvent);
enteredCharacter.addEventListener("keyup", enterEvent);


