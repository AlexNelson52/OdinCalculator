'use strict';
const calcDisplay = document.querySelector(".display")
function calculator(num1, num2, operator) {
  if (operator === '+') {
    return calcDisplay.textContent = (num1 + num2)
  }
  if (operator === '-') {
    return calcDisplay.textContent = (num1 - num2)
  }
  if (operator === '/') {
    return calcDisplay.textContent = (num1 / num2)
  }
  if (operator === '*') {
    return calcDisplay.textContent = (num1 * num2)
  }
  if (operator === '%') {
    return calcDisplay.textContent = (num1 % num2)
  } else return 'invalid'

}

window.onload = () => {
  getNumbers();
  getOperator();
  equal();
  clear();
}
function operate(num1, num2, operator) {
  return calculator(num1, num2, operator);
}

const num1Holder = [];
const concatNumber1 = [];
const concatNumber2 = [];
const num2Holder = [];
const operatorHolder = [];


function getNumbers() {
  const numberButtons = document.querySelectorAll(".number")

  for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
      num1Holder.push(numberButtons[i].innerHTML);
      calcDisplay.textContent += numberButtons[i].innerHTML;
    });


  }
}

function getOperator() {
  const numberButtons = document.querySelectorAll(".number")
  const operateButton = document.querySelectorAll(".operator")
  for (let i = 0; i < operateButton.length; i++) {
    operateButton[i].addEventListener('click', () => {
      operatorHolder.push(operateButton[i].innerHTML);
      calcDisplay.textContent = '';
      let x = Number(num1Holder.join(''));
      concatNumber1.push(x)
      num1Holder.length = 0

    })
  }
}


function equal() {
  const equalButton = document.querySelectorAll(".equal")
  for (let i = 0; i < equalButton.length; i++) {
    equalButton[i].addEventListener('click', () => {
      let x = Number(num1Holder.join(''))
      concatNumber2.push(x)
      operate(concatNumber1[0], concatNumber2[0], operatorHolder[0]);
      num1Holder.length = 0;
      num2Holder.length = 0;
      concatNumber1.length = 0;
      concatNumber2.length = 0;
      operatorHolder.length = 0;

    })
  }
}

function clear() {
  const clearButton = document.querySelectorAll(".clear");
  for (let i = 0; i < clearButton.length; i++) {
    clearButton[i].addEventListener('click', () => {
      calcDisplay.textContent = ''
      num1Holder.length = 0;
      num2Holder.length = 0;
      concatNumber1.length = 0;
      concatNumber2.length = 0;
      operatorHolder.length = 0;

    })
  }
}



console.log(concatNumber1)


console.log(concatNumber2)


console.log(operatorHolder)
console.log(num1Holder)


// You should push the number into num1Holder when a number button is clicked, not after an operator button is clicked. When an operator button is clicked, you need to store the operator in operatorHolder and also reset calcDisplay.textContent to an empty string to start displaying the second number.

//To store the second number after selecting an operator, you don't necessarily need to split the num1Holder array or remove the number event listeners. Instead, you can use a similar approach to how you're handling the first number.

// So I can give you some hint:
// When the user clicks on an operator button, it signifies the end of entering the first number. At this point, you need to start capturing the second number. You can create a flag variable to indicate that the first number entry is complete and you're now capturing the second number. Modify your event listener for number buttons to behave differently based on this flag variable. When the user clicks on a number button after selecting an operator, you can start populating the num2Holder array. Update the display accordingly to reflect the second number being entered.