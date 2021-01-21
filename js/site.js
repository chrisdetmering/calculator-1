// Clear button
const clear = document.querySelector('#clear');
const display = document.querySelector('#display');
const hardClear = () => {
  display.value = 0;
}

clear.addEventListener('click', (event) => {
  hardClear();
})
