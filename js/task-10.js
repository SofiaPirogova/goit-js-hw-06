function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const containerBoxes = document.querySelector('#boxes');

createBtnEl.addEventListener('click', onCreateBtn);
let counterValue = 0;
function onCreateBtn(e) {
  counterValue += 1;

  const amount = Number(e.currentTarget.previousElementSibling.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  let num = 20 * counterValue;
  for (let i = 1; i <= amount; i += 1) {
    num += 10;
    const box = `<div style="background-color: ${getRandomHexColor()}; height: ${num}px; width: ${num}px;"></div>`;
    containerBoxes.insertAdjacentHTML('afterbegin', box);
  }
}

destroyBtnEl.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  counterValue = 0;
  containerBoxes.innerHTML = '';
}
