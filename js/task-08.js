// 8
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  if (
    e.currentTarget.elements.email.value === '' ||
    e.currentTarget.elements.password.value === ''
  ) {
    return alert('Все поля должны быть заполнены!');
  } else {
    const newObj = {
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
    };
    console.log(newObj);
    e.currentTarget.reset();
  }
}
