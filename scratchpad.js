// You're getting closer, but it's still not quite there. You've set `growTree to accept 
// an object, but when you call it you're still not passing the object into the function.
//  Note the sad, empty parentheses: growTree(). You need to pass the tree object in as 
//  an argument: growTree(treeObj). 
// As it is, the code errors when I run it, because you're setting properties on the object 
// that's passed in, but without passing in an object, the treeObj variable inside growTree 
// is undefined.



var person = {fname:"John", lname:"Doe", age:25}; 

for (x in person) {
    txt += person[x];
}

treeObject

var obj = {
  key1: value1,
  key2: value2
};
  
Using dot notation:

obj.key3 = "value3";


var buildIt = "";

var letters=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (var i=0; i<letters.length; i++) {
  buildIt += letters[i];
  if ((i+1) % 5 === 0) {
    buildIt = buildIt + " ";
  }
    console.log(buildIt);
}


// --------------------------


var enteredTemperature = document.getElementById("enteredTemp");
var outputElement = document.getElementById("output");
var converterButton = document.getElementById("converter");
var clearButton = document.getElementById("clearTextField");
var celsiusButton = document.getElementById("celsiusRadio");
var fahrenheitButton = document.getElementById("fahrenheitRadio");

converterButton.addEventListener('click', chooseWhichConversion);
clearButton.addEventListener('click', clearInputField);

function clearInputField() {
  console.log("clearInputField", clearInputField);
  enteredTemperature.value = "";
}

function convertToCelsius() {
  var enteredTempValue = enteredTemperature.value;
  var convertToC = (enteredTempValue - 32) * (5/9);
  console.log("convertToC", convertToC);
  if (convertToC > 32) {
  console.log("greater than 32");
  outputElement.style.color = "red";
  }
  else if (convertToC < 0) {
    console.log("less than 32");
    outputElement.style.color = "blue";
  }
  else { 
    console.log("between 32 and 90")
    outputElement.style.color = "green";
  }
  outputElement.innerHTML = convertToC;
};

function convertToFahrenheit() {
  var enteredTempValue = enteredTemperature.value;
  var convertToF = enteredTempValue * 9/5 + 32;
  console.log("convertToF", convertToF);
  if (convertToF > 90) {
  console.log("greater than 90");
  outputElement.style.color = "red";
  }
  else if (convertToF < 32) {
    console.log("less than 32");
  outputElement.style.color = "blue";
  }
  else { 
    console.log("between 32 and 90")
    outputElement.style.color = "green";
  }
  outputElement.innerHTML = convertToF;
};



function chooseWhichConversion() {
  if (fahrenheitButton.checked) {
    console.log("fButtonChecked");
    convertToFahrenheit();
  }
  else if (celsiusButton.checked) {
    console.log("cButtonChecked");
    convertToCelsius();
  };
}



------------

document.body.addEventListener("keyup", growtree);
var msg = document.getElementById('state-msg');
document.body.addEventListener('keydown', function(e) {
    msg.textContent = 'keydown:' + e.keyCode;
});