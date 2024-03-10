'use strict';
const calcDisplay = document.querySelector(".display")

const NumberButton = document.querySelectorAll(".number")

const operatorButton = document.querySelectorAll(".operator")

const equalButton = document.querySelector(".equal")

const previousDispaly = document.querySelector(".previousDisplay")

const decimal = document.querySelector(".decimal")

const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
  if (currentNum != "" && previousNum != "") {
    calculate();
  }
})

const clear = document.querySelector(".clear");
clear.addEventListener('click', clearCalc)

let currentNum = '';
let previousNum = '';
let operator = '';

NumberButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
  });
});

function handleNumber(number) {
  if (currentNum.length <= 10) {
    currentNum += number;
    calcDisplay.textContent = currentNum;
  }
}


operatorButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
  })
})

decimal.addEventListener('click', addDecimal)

function handleOperator(op) {
  operator = op;
  previousNum = currentNum;
  previousDispaly.textContent = previousNum + " " + operator;
  currentNum = '';
  calcDisplay.textContent = '';
}



function calculate() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === "+") {
    currentNum = previousNum += currentNum;
  }
  else if (operator === "*") {
    currentNum = previousNum *= currentNum;
  }
  else if (operator === "-") {

    currentNum = previousNum -= currentNum;
  }
  else if (operator === "%") {

    currentNum = previousNum %= currentNum;
  }
  else if (operator === '/') {
    if (currentNum <= 0) {
      previousNum = "Error, can't divide by 0"
      previousDispaly.textContent = '';
      calcDisplay.textContent = previousNum;
      operator = '';
      return;
    }
    currentNum = previousNum /= currentNum;
  }
  previousNum = previousNum.toString();
  previousDispaly.textContent = '';
  calcDisplay.textContent = previousNum;
  operator = ''
}


function clearCalc() {
  previousNum = ''
  currentNum = ''
  operator = ''
  calcDisplay.textContent = ''
  previousDispaly.textContent = ''
}

function addDecimal() {
  if (!currentNum.includes('.')) {
    currentNum += '.'
    calcDisplay.textContent = currentNum;
  }
}

// console.log(calculator())

// You should push the number into num1Holder when a number button is clicked, not after an operator button is clicked. When an operator button is clicked, you need to store the operator in operatorHolder and also reset calcDisplay.textContent to an empty string to start displaying the second number.

//To store the second number after selecting an operator, you don't necessarily need to split the num1Holder array or remove the number event listeners. Instead, you can use a similar approach to how you're handling the first number.

// So I can give you some hint:
// When the user clicks on an operator button, it signifies the end of entering the first number. At this point, you need to start capturing the second number. You can create a flag variable to indicate that the first number entry is complete and you're now capturing the second number. Modify your event listener for number buttons to behave differently based on this flag variable. When the user clicks on a number button after selecting an operator, you can start populating the num2Holder array. Update the display accordingly to reflect the second number being entered.