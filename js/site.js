// Clear button
const clear = document.querySelector('#clear');
const display = document.querySelector('#display');

const calculations = {
  currentTotal: null,
  lastSymbol : '',
  firstNumber: null,
  secondNumber: null,
};

const hardClear = () => {
  display.value = 0;
  display.setAttribute('placeholder', '0');
  calculations.currentTotal = 0;
  calculations.lastSymbol = '';
}

const calculate = (event) => {
  if (calculations.lastSymbol === '' || calculations.lastSymbol === '=') {
      calculations.firstNumber = parseFloat(display.value) || parseFloat(display.getAttribute('placeholder'));
      display.value = '';
      display.setAttribute('placeholder', calculations.firstNumber);
      calculations.lastSymbol = event.target.innerText;
  } else {
    calculations.secondNumber = parseFloat(display.value);
    switch (calculations.lastSymbol) {
      case '/':
        calculations.currentTotal = calculations.firstNumber / calculations.secondNumber;
        display.value = '';
        display.setAttribute('placeholder', calculations.currentTotal);
        calculations.firstNumber = calculations.currentTotal;
        calculations.lastSymbol = event.target.innerText;
        calculations.secondNumber = null;
        break;
        case 'X':
          calculations.currentTotal = calculations.firstNumber * calculations.secondNumber;
          display.value = '';
          display.setAttribute('placeholder', calculations.currentTotal);
          calculations.firstNumber = calculations.currentTotal;
          calculations.lastSymbol = event.target.innerText;
          calculations.secondNumber = null;
          break;
      case '-':
        calculations.currentTotal = calculations.firstNumber - calculations.secondNumber;
        display.value = '';
        display.setAttribute('placeholder', calculations.currentTotal);
        calculations.firstNumber = calculations.currentTotal;
        calculations.lastSymbol = event.target.innerText;
        calculations.secondNumber = null;
        break;
        case '+':
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
  if (display.value === '0') {
    display.value = '';
  }

  if (event.target.innerText === '=')
  {
    calculate(event);
    if (calculations.firstNumber != null && calculations.secondNumber === null) {
      calculations.lastSymbol = '';
    }
  }  else {

    display.value += event.target.innerText;
  }
})

// symbols
const symbolsContainer = document.querySelector('#symbols-container');



symbolsContainer.addEventListener('click', (event) => {
  // Add constants for symbols

  calculate(event);
})
