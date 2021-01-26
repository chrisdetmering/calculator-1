// Clear button
const clear = document.querySelector('#clear');
const display = document.querySelector('#display');

// Set math operators
const division = '/';
const multiplication = 'X';
const subtraction = '-';
const addition = '+';

const calculatorProps = {
  currentTotal: null,
  lastSymbol : '',
  firstNumber: null,
  secondNumber: null,
  strNumber: ''
};

const setFirstNumber = (event) => {
  calculatorProps.firstNumber = calculatorProps.currentTotal === null ? parseFloat(calculatorProps.strNumber) || parseFloat(display.value) : calculatorProps.currentTotal;
  display.value = '';
  calculatorProps.strNumber = '';
  display.value = calculatorProps.firstNumber;
  calculatorProps.lastSymbol = event.target.innerText;
}

const setSecondNumber = () => calculatorProps.secondNumber = parseFloat(calculatorProps.strNumber);

const setValues = () => {
  display.value = '';
  calculatorProps.strNumber = '';
  display.value = calculatorProps.currentTotal;
  calculatorProps.firstNumber = calculatorProps.currentTotal;
  calculatorProps.currentTotal = null;
  calculatorProps.lastSymbol = event.target.innerText;
  calculatorProps.secondNumber = null;
}

const calculate = (event) => {
  if (calculatorProps.lastSymbol === '') {
    setFirstNumber(event);
  } else {
    setSecondNumber();
    
    // Update Math Symbol
    if (calculatorProps.secondNumber !== 0 && !calculatorProps.secondNumber) {
      calculatorProps.lastSymbol = event.target.innerText;
      return;
    }

    switch (calculatorProps.lastSymbol) {
      case division:
        calculatorProps.currentTotal = calculatorProps.firstNumber / calculatorProps.secondNumber;
        setValues();
        break;
        case multiplication:
          calculatorProps.currentTotal = calculatorProps.firstNumber * calculatorProps.secondNumber;
          setValues();
          break;
      case subtraction:
        calculatorProps.currentTotal = calculatorProps.firstNumber - calculatorProps.secondNumber;
        setValues();
        break;
        case addition:
          calculatorProps.currentTotal = calculatorProps.firstNumber + calculatorProps.secondNumber;
          setValues();
          break;
    }
  }
}

const hardClear = () => {
  display.value = 0;
  calculatorProps.currentTotal = null;
  calculatorProps.lastSymbol = '';
  calculatorProps.strNumber = '';
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
  
    // Run if the equal symbol has been clicked
    if (event.target.innerText === '=')
    {
      // 
      if (calculatorProps.secondNumber === null && calculatorProps.lastSymbol === '=') {
        calculatorProps.lastSymbol = '';
      } else if (calculatorProps.strNumber === '' && calculatorProps.firstNumber ) {
        display.value = calculatorProps.firstNumber;
        calculatorProps.strNumber = calculatorProps.firstNumber;
      }

      // Run calculations
      calculate(event);

      // Reset lastSymbol
      if (calculatorProps.firstNumber != null && calculatorProps.secondNumber === null) {
        calculatorProps.lastSymbol = '';
      }
    }  else {
        // Prevent more than one decimal from being added.
        calculatorProps.strNumber += (calculatorProps.strNumber.includes('.') && event.target.innerText === '.' ) ? '' : event.target.innerText;

        // Prevent more than one zero from being added
        // and prevent a zero from being added to the begining of
        // a number unless the zero is followed by a decimal to its right
        if (calculatorProps.strNumber.length > 1 && calculatorProps.strNumber[0] === '0' && calculatorProps.strNumber[1] !== '.') {
          calculatorProps.strNumber = calculatorProps.strNumber[1];
        }

        // Set strNumber to 0. if the decimal button is clicked
        if (calculatorProps.strNumber === '.') {
          calculatorProps.strNumber = '0.'
        }

        // set display value
        display.value = calculatorProps.strNumber;
    }
  }
})

// symbols
const symbolsContainer = document.querySelector('#symbols-container');

symbolsContainer.addEventListener('click', (event) => {
  // Only run if a button is clicked
  if (event.target.className === 'math-symbol')
  {
    calculate(event);
  }
  
})
