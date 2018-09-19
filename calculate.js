
//initialize calculator object
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitForSecondOperand: false,
  operator: null,
};

//button click handler
const keyClick = document.querySelector('.calculator__keys');

keyClick.addEventListener('click', function() {
  alert("Button clicked!");
});

//update calculator screen display



