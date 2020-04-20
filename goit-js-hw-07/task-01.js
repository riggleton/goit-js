const ul = document.querySelector("#categories");

const categories = document.querySelectorAll("li.item");

console.log(`В списке ${categories.length} категории.`);

categories.forEach((category) => {
  console.log(`Категория: ${category.querySelector("h2").textContent}`);
  console.log(
    `Количество элементов: ${category.querySelectorAll("li").length}`
  );
});
