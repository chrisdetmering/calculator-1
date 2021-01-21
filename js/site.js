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
    display.value = '';
    // display.setAttribute('placeholder', calculations.currentTotal += number);
    display.value = calculations.currentTotal += number;
  } else {
    display.value += event.target.innerText;
  }
  console.log('Display value:', display.value);
})

// symbols
const symbolsContainer = document.querySelector('#symbols-container');



symbolsContainer.addEventListener('click', (event) => {
  // Add constants for symbols

  if (calculations.lastSymbol === '') {
    calculations.firstNumber = parseFloat(display.value);
    display.value = '';
    display.setAttribute('placeholder', calculations.firstNumber);
    calculations.lastSymbol = event.target.innerText;
    console.log('firstnum', calculations.firstNumber);
    console.log('symbol', calculations.lastSymbol);
  } else {
    console.log('initial total:', calculations.currentTotal);
    calculations.secondNumber = parseFloat(display.value);
    switch (calculations.lastSymbol) {
      case '+':
        calculations.currentTotal = calculations.firstNumber + calculations.secondNumber;
        console.log('total after:', calculations.currentTotal);
        display.value = '';
        display.setAttribute('placeholder', calculations.currentTotal)
        break;
      case '-':
        console.log(calculations.currentTotal);
        calculations.currentTotal -= parseFloat(number);
        break;
    }
  }

  // const number = parseFloat(display.value);
  // if (calculations.currentTotal === 0) {
  //   calculations.currentTotal = number;
  // }


  // display.value = number;

  // switch (calculations.lastSymbol) {
  //   case '+':
  //     calculations.currentTotal += parseFloat(number);
  //     console.log('total after:', calculations.currentTotal);
  //     display.value = '';
  //     display.setAttribute('placeholder', calculations.currentTotal)
  //     break;
  //   case '-':
  //     console.log(calculations.currentTotal);
  //     calculations.currentTotal -= parseFloat(number);
  //     break;
  // }
})
