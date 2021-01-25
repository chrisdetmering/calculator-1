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
  strNumber: ''
};

const hardClear = () => {
  display.value = 0;
  display.setAttribute('placeholder', '0');
  calculations.currentTotal = null;
  calculations.lastSymbol = '';
  calculations.strNumber = '';
}

const calculate = (event) => {
  if (calculations.lastSymbol === '' || calculations.lastSymbol === '=') { // maybe remove the ||
      // calculations.firstNumber = parseFloat(display.value) || parseFloat(display.getAttribute('placeholder'));
      calculations.firstNumber = calculations.currentTotal === null ? parseFloat(calculations.strNumber) : calculations.currentTotal;
      display.value = '';
      calculations.strNumber = '';
      display.setAttribute('placeholder', calculations.firstNumber);
      calculations.lastSymbol = event.target.innerText;
  } else {
    calculations.secondNumber = parseFloat(calculations.strNumber);
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
        calculations.strNumber = '';
        display.setAttribute('placeholder', calculations.currentTotal);
        calculations.firstNumber = calculations.currentTotal;
        calculations.lastSymbol = event.target.innerText;
        calculations.secondNumber = null;
        break;
        case multiplication:
          calculations.currentTotal = calculations.firstNumber * calculations.secondNumber;
          display.value = '';
          calculations.strNumber = '';
          display.setAttribute('placeholder', calculations.currentTotal);
          calculations.firstNumber = calculations.currentTotal;
          calculations.lastSymbol = event.target.innerText;
          calculations.secondNumber = null;
          break;
      case subtraction:
        calculations.currentTotal = calculations.firstNumber - calculations.secondNumber;
        display.value = '';
        calculations.strNumber = '';
        display.setAttribute('placeholder', calculations.currentTotal);
        calculations.firstNumber = calculations.currentTotal;
        calculations.lastSymbol = event.target.innerText;
        calculations.secondNumber = null;
        break;
        case addition:
          calculations.currentTotal = calculations.firstNumber + calculations.secondNumber;
          display.value = '';
          calculations.strNumber = '';
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
        calculations.strNumber = calculations.firstNumber;
      }

      calculate(event);

      if (calculations.firstNumber != null && calculations.secondNumber === null) {
        calculations.lastSymbol = '';
      }
    }  else {
      

      if (calculations.strNumber === '.') {
        calculations.strNumber = '0.'
      }
      if (calculations.strNumber.includes('.') && event.target.innerText === '.') {
      
      } else {
        calculations.strNumber += (calculations.strNumber.includes('.') && event.target.innerText === '.' ) ? '' : event.target.innerText;
        console.log(calculations.strNumber);
        console.log(parseFloat(calculations.strNumber));
        display.value = calculations.strNumber;
      }

    }
  }
})

// symbols
const symbolsContainer = document.querySelector('#symbols-container');



symbolsContainer.addEventListener('click', (event) => {
  calculate(event);
})
