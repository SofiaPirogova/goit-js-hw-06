// 4
let counterValue = 0;

const minusEl = document.querySelector('button[data-action="decrement"]');
const plusEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.getElementById('value');

plusEl.addEventListener('click', onPlus);
function onPlus(event) {
  counterValue += 1;
  valueEl.textContent = `${counterValue}`;
}
minusEl.addEventListener('click', onMinus);
function onMinus(event) {
  counterValue -= 1;
  valueEl.textContent = `${counterValue}`;
}
