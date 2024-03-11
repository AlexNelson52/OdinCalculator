'use strict'

const calcDisplay = document.querySelector(".display")
const previousDisplay = document.querySelector(".previousDisplay")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const clear = document.querySelector(".clear")
const equals = document.querySelector(".equal")
const decimal = document.querySelector(".decimal")

let currentNum = '';
let previousNum = '';
let operator = '';

calcDisplay.textContent = '';
numberButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    numberDisplay(e.target.textContent);
  })
})

function numberDisplay(number) {
  if (currentNum.length <= 10) {
    currentNum += number;
    calcDisplay.textContent = currentNum;
  }
}

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    operatorDisplay(e.target.textContent);
  })
})

function operatorDisplay(op) {
  if (currentNum != '' && previousNum != '' && operator != '') {
    calculator(Number(currentNum), Number(previousNum), operator)
  }
  operator = op;
  previousNum = currentNum;
  previousDisplay.textContent = previousNum + " " + operator;
  currentNum = '';
  calcDisplay.textContent = '';

}



clear.addEventListener('click', clearCalc)


function clearCalc() {
  currentNum = '';
  previousNum = '';
  operator = '';
  calcDisplay.textContent = '';
}


function calculator(prev, current, op1) {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (op1 === "+") {
    currentNum = current += prev;

  }
  if (op1 === "-") {
    currentNum = current -= prev;
  }
  if (op1 === "%") {
    currentNum = current %= prev;
  }
  if (op1 === "*") {
    currentNum = current *= prev;
  }
  if (op1 === "/") {
    if (current === 0) {
      return calcDisplay.textContent = "don't crash my calc"
    } else
      currentNum = current /= prev;
  }

  previousDisplay.textContent = '';
  calcDisplay.textContent = currentNum;
  operator = ''

}


equals.addEventListener('click', () => {
  if (currentNum != "" && previousNum != "") {
    calculator(Number(currentNum), Number(previousNum), operator);
  }
})

decimal.addEventListener('click', addDecimal)


function addDecimal() {
  if (!currentNum.includes('.')) {
    currentNum += '.'
    calcDisplay.textContent = currentNum;
  }
}