function clearDisplay(empty) {
  document.getElementById("display").value = empty;
}
function createEquation(buttonValue) {
  document.getElementById("display").value += buttonValue;
}
function evaluateEquation() {
  try{
    var solution = eval(document.getElementById("display").value);
    document.getElementById("display").value = solution;
  }
  catch(err){
    clearDisplay("Error");
  }
}
function powerOfTwo() {
    var number = document.getElementById("display").value;
    if (number.includes("+")) {
      clearDisplay("Error");
    }
    else if (number.includes("-")) {
      clearDisplay("Error");
    }
    else if (number.includes("*")) {
      clearDisplay("Error");
    }
    else if (number.includes("/")) {
      clearDisplay("Error");
    }
    else {
      clearDisplay(eval(number * number));
    }
}
function randomNumber() {
  number = Math.random().toFixed(5)
  clearDisplay(number)
}