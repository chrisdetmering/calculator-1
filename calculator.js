const display = document.querySelector('#display');
let firstOperand = ''; 
let operation = null; 
let secondOperand = ''; 


document.querySelectorAll('.number').forEach(numberButton => { 
  numberButton.addEventListener('click', event => { 
    const number = event.target.textContent; 
    
    if (!operation && firstOperand === '0') { 
      firstOperand = number; 
      display.value = firstOperand; 
      return; 
    }
    
     if (!operation) { 
       firstOperand += number; 
       display.value = firstOperand; 
       return; 
     } 

     if (firstOperand && operation){ 
       secondOperand += number; 
       display.value = secondOperand; 
     }
  })

})

const calculate = () => {
  let result; 
  if (operation === 'multiplication') { 
    result = Number(firstOperand) * Number(secondOperand); 
  }
  if (operation === 'division') { 
    result = Number(firstOperand) / Number(secondOperand); 
  }
  if (operation === 'addition') { 
    result = Number(firstOperand) + Number(secondOperand); 
  }
  if (operation === 'subtraction') { 
    result = Number(firstOperand) - Number(secondOperand); 
  }
  
  if (Number.isInteger(result)) { 
    return `${result}`; 
  } else { 
    return result.toFixed(3); 
  }
}




document.querySelectorAll(".math-symbol").forEach(operator => { 
 operator.addEventListener("click", event => { 
  const selectedOperation = event.target; 

  if (firstOperand && !operation) { 
    operation = selectedOperation.id; 
    display.value = selectedOperation.textContent; 
    return; 
  }

  if (firstOperand && operation && secondOperand) { 
    const result = calculate(); 
    firstOperand = result; 
    operation = selectedOperation.id; 
    secondOperand = ''; 
    display.value = result; 
  }

 })
})

document.querySelector(".equals")
.addEventListener("click", () => { 
  if (firstOperand && operation && secondOperand) { 
   const result = calculate(); 
   firstOperand = result; 
   operation = null; 
   secondOperand = ''; 
   display.value = result; 
  } 
  
})

document.querySelector('#clear')
.addEventListener("click", () => { 
  firstOperand = ''; 
  operation = null; 
  secondOperand = ''; 
  display.value = '0'; 
})





document.querySelector('.decimal')
.addEventListener("click", () => { 
  if (!display.value.includes('.')) { 
    if (Number(display.value) === 0 && operation === null) { 
      firstOperand += '0.'; 
      display.value = firstOperand; 
      return; 
    }

    if (Number(display.value) && operation === null) { 
      firstOperand += '.'; 
      display.value = firstOperand; 
      return; 
    } 
    
    if (operation && !secondOperand) { 
      secondOperand += '0.'; 
      display.value = secondOperand; 
      return; 
    }

    if (secondOperand) { 
      secondOperand += '.'; 
      display.value = secondOperand; 
    }
  }
  
})

