function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', onChangeColor);

function onChangeColor(e) {
  document.body.style.backgroundColor = getRandomHexColor();
  e.currentTarget.previousElementSibling.firstElementChild.textContent =
    getRandomHexColor();
}
