// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
const inputEl = document.querySelector('#name-input');

const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', changeText);
function changeText(event) {
  if (inputEl.value === '') {
    nameEl.textContent = 'Anonymous';
  } else {
    nameEl.textContent = event.currentTarget.value;
  }
}
