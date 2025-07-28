const AC_button = document.getElementById("clear");
const negate_button = document.getElementById("negate");
const percent_button = document.getElementById("percent");
const divide_button = document.getElementById("divide");
const multiply_button = document.getElementById("multiply");
const subtract_button = document.getElementById("subtract");
const add_button = document.getElementById("add");
const equals_button = document.getElementById("equals");
const decimal_button = document.getElementById("decimal");
const nine_button = document.getElementById("nine");
const eight_button = document.getElementById("eight");
const seven_button = document.getElementById("seven");
const six_button = document.getElementById("six");
const five_button = document.getElementById("five");
const four_button = document.getElementById("four");
const three_button = document.getElementById("three");
const two_button = document.getElementById("two");
const one_button = document.getElementById("one");
const nd_button = document.getElementById("nd");
const zero_button = document.getElementById("zero");

const display = document.getElementById("display");

resultShowing = 0;


function showText(text){
  if (resultShowing == 1) {
    clearDisplay();
    resultShowing = 0;
  }
  display.textContent += text;
}

function clearDisplay() {
  resultShowing = 0;
  display.textContent = "";
}

function Calculate() {
  resultShowing = 0;
  try{
    const result = eval(display.textContent);
    console.log(result);
    display.textContent = result;
    resultShowing = 1;
  } catch (error) {
    console.error("Error evaluating expression:", error);
    display.textContent = "Error";
  }
}

function Negate(){
  if (resultShowing == 1) {
    display.textContent = eval(display.textContent) * -1;
  }
}