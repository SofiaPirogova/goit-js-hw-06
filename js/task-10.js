function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
const createBtnEl = document.querySelector('button[data-create]');
const containerBoxes = document.querySelector('#boxes');
// console.log(createBtnEl);
createBtnEl.addEventListener('click', onCreateBtn);
function onCreateBtn(e) {
  const amount = Number(e.currentTarget.previousElementSibling.value);
  // createBoxes(amount);
  createBoxes();
}

function createBoxes() {
  const num = 30;
  const box = `<div width="${num}" height="${num}" style="background-color: ${getRandomHexColor()}">Ghbn</div>`;
  containerBoxes.insertAdjacentHTML('afterbegin', box);
}
