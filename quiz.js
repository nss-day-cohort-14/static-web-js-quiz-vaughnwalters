var enteredHeight = document.getElementById("howTallTree");
var enteredCharacter = document.getElementById("whichCharacter")
var button = document.getElementById("button");
var enter = document.getElementById("button");
var space = " ";
var treeBuilder = "";
var charWidth = 1;

function growTree(treeObj) {
  var treeObj = {
    char: enteredCharacter.value,
    height: enteredHeight.value
    };
  var spaces = 1;
  if (treeObj.height.length === 0 || treeObj.char.length === 0) {
    alert ("Both fields must have values entered");
  } else {
    treeBuilder = space.repeat(treeObj.height) + treeObj.char;
    console.log("treeBuilder", treeBuilder);
    for (var i=0; i<treeObj.height; i++) {
      charWidth += 2;
      treeBuilder = space.repeat(treeObj.height - parseInt(spaces)) + treeObj.char.repeat(parseInt(charWidth));
      console.log("treeBuilder", treeBuilder);
      spaces+=1;
    }
    charWidth=1; 
  }
};
  
function enterEvent() {
    var treeObj = {
    char: enteredCharacter.value,
    height: enteredHeight.value
    }; 
  if (event.keyCode===13) {
    growTree(treeObj);
  }
};

button.addEventListener("click", growTree);
enteredHeight.addEventListener("keyup", enterEvent);
enteredCharacter.addEventListener("keyup", enterEvent);

