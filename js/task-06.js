//  правильно я сделала или нет, а то у меня код оч долго исполнялся
const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
inputEl.addEventListener('blur', onBlur);
function onBlur(event) {
  if (inputEl.value.split('').length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
