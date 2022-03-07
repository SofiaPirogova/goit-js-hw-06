// 2
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulListEl = document.querySelector('#ingredients');

const list = ingredients.map(el => {
  const newLiEl = document.createElement('li');
  newLiEl.textContent = el;
  newLiEl.classList.add('item');
  return newLiEl;
});

ulListEl.append(...list);
