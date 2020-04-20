let counterValue = 0;
let value = document.querySelector("#value");

document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", (event) => {
    counterValue -= 1;
    value.textContent = counterValue;
  });

document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", (event) => {
    counterValue += 1;
    value.textContent = counterValue;
  });
