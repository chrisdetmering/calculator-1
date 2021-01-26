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
  calculations.currentTotal = null;
  calculations.lastSymbol = '';
  calculations.strNumber = '';
}

const setFirstNumber = (event) => {
  calculations.firstNumber = calculations.currentTotal === null ? parseFloat(calculations.strNumber) || parseFloat(display.value) : calculations.currentTotal;
  display.value = '';
  calculations.strNumber = '';
  display.value = calculations.firstNumber;
  calculations.lastSymbol = event.target.innerText;
}

const setSecondNumber = () => calculations.secondNumber = parseFloat(calculations.strNumber);

const setValues = () => {
  display.value = '';
  calculations.strNumber = '';
  display.value = calculations.currentTotal;
  calculations.firstNumber = calculations.currentTotal;
  calculations.currentTotal = null;
  calculations.lastSymbol = event.target.innerText;
  calculations.secondNumber = null;
}

const calculate = (event) => {
  if (calculations.lastSymbol === '' || calculations.lastSymbol === '=') { // maybe remove the ||
    setFirstNumber(event);
  } else {
    setSecondNumber();
    
    // Maybe make this a method
    if (calculations.secondNumber !== 0 && !calculations.secondNumber) {
      calculations.lastSymbol = event.target.innerText;
      return;
    }

    switch (calculations.lastSymbol) {
      case division:
        calculations.currentTotal = calculations.firstNumber / calculations.secondNumber;
        setValues();
        break;
        case multiplication:
          calculations.currentTotal = calculations.firstNumber * calculations.secondNumber;
          setValues();
          break;
      case subtraction:
        calculations.currentTotal = calculations.firstNumber - calculations.secondNumber;
        setValues();
        break;
        case addition:
          calculations.currentTotal = calculations.firstNumber + calculations.secondNumber;
          setValues();
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
  
    if (event.target.innerText === '=')
    {
      if (calculations.secondNumber === null && calculations.lastSymbol === '=') {
        calculations.lastSymbol = '';
      } else if (calculations.strNumber === '' && calculations.firstNumber ) {
        display.value = calculations.firstNumber;
        calculations.strNumber = calculations.firstNumber;
      }

      calculate(event);

      if (calculations.firstNumber != null && calculations.secondNumber === null) {
        calculations.lastSymbol = '';
      }
    }  else {
      
        calculations.strNumber += (calculations.strNumber.includes('.') && event.target.innerText === '.' ) ? '' : event.target.innerText;

        if (calculations.strNumber.length > 1 && calculations.strNumber[0] === '0' && calculations.strNumber[1] !== '.') {
          calculations.strNumber = calculations.strNumber[1];
        }

        if (calculations.strNumber === '.') {
          calculations.strNumber = '0.'
        }

        console.log(calculations.strNumber);
        console.log(parseFloat(calculations.strNumber));
        display.value = calculations.strNumber;
    }
  }
})

// symbols
const symbolsContainer = document.querySelector('#symbols-container');

symbolsContainer.addEventListener('click', (event) => {
  if (event.target.className === 'math-symbol')
  {
    calculate(event);
  }
  
})
