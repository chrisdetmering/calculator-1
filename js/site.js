// Clear button
const clear = document.querySelector('#clear');
const display = document.querySelector('#display');

const calculations = {
  currentTotal: 0,
  lastSymbol : '',
  firstNumber: 0,
  secondNumber: 0,
};

const hardClear = () => {
  display.value = 0;
  calculations.currentTotal = 0;
}

const calculate = (event) => {
  if (calculations.lastSymbol === '') {
    calculations.firstNumber = parseFloat(display.value);
    display.value = '';
    display.setAttribute('placeholder', calculations.firstNumber);
    calculations.lastSymbol = event.target.innerText;
    console.log('first num', calculations.firstNumber);
    console.log('symbol', calculations.lastSymbol);
  } else {
    console.log('initial total:', calculations.currentTotal);
    calculations.secondNumber = parseFloat(display.value);
    switch (calculations.lastSymbol) {
      case '/':
        calculations.currentTotal = calculations.firstNumber / calculations.secondNumber;
        console.log('total add:', calculations.currentTotal);
        display.value = '';
        display.setAttribute('placeholder', calculations.currentTotal);
        calculations.firstNumber = calculations.currentTotal;
        calculations.lastSymbol = event.target.innerText;
        break;
        case 'X':
          calculations.currentTotal = calculations.firstNumber * calculations.secondNumber;
          console.log('total add:', calculations.currentTotal);
          display.value = '';
          display.setAttribute('placeholder', calculations.currentTotal);
          calculations.firstNumber = calculations.currentTotal;
          calculations.lastSymbol = event.target.innerText;
          break;
      case '-':
        calculations.currentTotal = calculations.firstNumber - calculations.secondNumber;
        console.log('total subtract:', calculations.currentTotal);
        display.value = '';
        display.setAttribute('placeholder', calculations.currentTotal);
        calculations.firstNumber = calculations.currentTotal;
        calculations.lastSymbol = event.target.innerText;
        break;
        case '+':
          calculations.currentTotal = calculations.firstNumber + calculations.secondNumber;
          console.log('total add:', calculations.currentTotal);
          display.value = '';
          display.setAttribute('placeholder', calculations.currentTotal);
          calculations.firstNumber = calculations.currentTotal;
          calculations.lastSymbol = event.target.innerText;
          break;
    }
  }
}

clear.addEventListener('click', (event) => {
  hardClear();
})

// numbers, dot, and equals
const numbersContainer = document.querySelector('#numbers-container');

numbersContainer.addEventListener('click', (event) => {
  if (display.value === '0') {
    display.value = '';
  }
  console.log('Display value:', display.value);

  if (event.target.innerText === '=')
  {
    let number = parseInt(display.value);
    calculate(event);
  } else {
    display.value += event.target.innerText;
  }
  console.log('Display value:', display.value);
})

// symbols
const symbolsContainer = document.querySelector('#symbols-container');



symbolsContainer.addEventListener('click', (event) => {
  // Add constants for symbols

  calculate(event);
})
