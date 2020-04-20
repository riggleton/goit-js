const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let listItems = [];
const list = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItems.push(listItem);
});

list.append(...listItems);

// const list = document.querySelector('#ingredients');
// var documentFragment = document.createDocumentFragment();

// ingredients.forEach(ingredient => {
//   const listItem = document.createElement('li');
//   listItem.textContent = ingredient;
//   documentFragment.appendChild(listItem);

//   console.log(listItem);
// });

// list.appendChild(documentFragment);
