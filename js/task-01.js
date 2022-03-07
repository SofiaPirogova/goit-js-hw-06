// 1
const liItem = document.querySelectorAll('.item');
console.log('Number of categories:', liItem.length);
const newText = Array.from(liItem).map(el => {
  console.log('Category:', el.firstElementChild.textContent);
  console.log('Elements:', el.lastElementChild.children.length);
});
