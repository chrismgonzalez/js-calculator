
//initialize calculator object
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector('.calculator__display');
  display.value = calculator.displayValue;
}

updateDisplay();
//button click handler
const keyClick = document.querySelector('.calculator__keys');

keyClick.addEventListener('click', function() {
  alert("Button clicked!");
});

//update calculator screen display



