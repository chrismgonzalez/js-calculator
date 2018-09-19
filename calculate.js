
//initialize calculator object
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

//update display
function updateDisplay() {
  const display = document.querySelector('.calculator__display');
  display.value = calculator.displayValue;
}

updateDisplay();

//key click handler

const keys = document.querySelector('.calculator__keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if(!target.matches('button')) {
    return;
  }

  handleOperator(target.value);
  updateDisplay();
  console.log(calculator)

  if(target.classList.contains('clear')) {
    console.log('clear', target.value);
    return;
  }

  inputDigit(target.value);
  updateDisplay();
  console.log(calculator)
});

//display digit on display

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit: displayValue + digit;
  }
  console.log(calculator)
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if(firstOperand === null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = performCalculation[operator](firstOperand, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperator = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

const performCalculation = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '=': (firstOperand, secondOperand) => secondOperand,
 };

 function resetCalculator() {
   calculator.displayValue = '0';
   calculator.firstOperand = null;
   calculator.waitingForSecondOperand = false;
   calculator.operator = null;
   console.log(calculator);
 }


