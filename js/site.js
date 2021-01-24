// Clear button
const clear = document.querySelector('#clear');
const display = document.querySelector('#display');

// Set math operators
const division = '/';
const multiplication = 'X';
const subtraction = '-';
const addition = '+';

// Array of math operators
const mathOperators = [division, multiplication, subtraction, addition];

const calculations = {
  currentTotal: null,
  lastSymbol : '',
  firstNumber: null,
  secondNumber: null,
};

const hardClear = () => {
  // display.value = 0;
  display.setAttribute('placeholder', '0');
  calculations.currentTotal = 0;
  calculations.lastSymbol = '';
}

const calculate = (event) => {
  if (calculations.lastSymbol === '' || calculations.lastSymbol === '=') { // maybe remove the ||
      calculations.firstNumber = parseFloat(display.value) || parseFloat(display.getAttribute('placeholder'));
      display.value = '';
      display.setAttribute('placeholder', calculations.firstNumber);
      calculations.lastSymbol = event.target.innerText;
  } else {
    calculations.secondNumber = parseFloat(display.value);
    // console.log(parseFloat(display.value));
    // console.log(!calculations.secondNumber);
    // calculations.secondNumber = parseFloat(display.value) ? parseFloat(display.value) : calculations.firstNumber;
    // Maybe make this a method
    if (calculations.secondNumber !== 0 && !calculations.secondNumber) {
      calculations.lastSymbol = event.target.innerText;
      return;
    }
    // if (!calculations.secondNumber) {
    //   calculations.lastSymbol = '';
    //   return;
    // }
    switch (calculations.lastSymbol) {
      case division:
        calculations.currentTotal = calculations.firstNumber / calculations.secondNumber;
        display.value = '';
        display.setAttribute('placeholder', calculations.currentTotal);
        calculations.firstNumber = calculations.currentTotal;
        calculations.lastSymbol = event.target.innerText;
        calculations.secondNumber = null;
        break;
        case multiplication:
          calculations.currentTotal = calculations.firstNumber * calculations.secondNumber;
          display.value = '';
          display.setAttribute('placeholder', calculations.currentTotal);
          calculations.firstNumber = calculations.currentTotal;
          calculations.lastSymbol = event.target.innerText;
          calculations.secondNumber = null;
          break;
      case subtraction:
        calculations.currentTotal = calculations.firstNumber - calculations.secondNumber;
        display.value = '';
        display.setAttribute('placeholder', calculations.currentTotal);
        calculations.firstNumber = calculations.currentTotal;
        calculations.lastSymbol = event.target.innerText;
        calculations.secondNumber = null;
        break;
        case addition:
          calculations.currentTotal = calculations.firstNumber + calculations.secondNumber;
          display.value = '';
          display.setAttribute('placeholder', calculations.currentTotal);
          calculations.firstNumber = calculations.currentTotal;
          calculations.lastSymbol = event.target.innerText;
          calculations.secondNumber = null;
          break;
    }
  }
}

clear.addEventListener('click', (event) => {
  if (event.target.innerText === 'CE') {
    hardClear();
  } else {
    softClear();
  }
  
})

// numbers, dot, and equals
const numbersContainer = document.querySelector('#numbers-container');

numbersContainer.addEventListener('click', (event) => {
  // Only run if a button is clicked
  if (event.target.className === 'number') {
    // if (display.value === '0') {
    //   display.value = '';
    // }
  
    if (event.target.innerText === '=')
    {
      if (calculations.secondNumber === null) {
        display.value = calculations.firstNumber;
      }

      calculate(event);

      if (calculations.firstNumber != null && calculations.secondNumber === null) {
        calculations.lastSymbol = '';
      }
    }  else {
      console.log(display.value);
      console.log(parseFloat(display.value));
      display.value += event.target.innerText;
    }
  }
})

// symbols
const symbolsContainer = document.querySelector('#symbols-container');



symbolsContainer.addEventListener('click', (event) => {
  calculate(event);
})
