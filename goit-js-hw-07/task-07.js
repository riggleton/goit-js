const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

input.addEventListener(
  "input",
  (event) => (text.style.fontSize = event.currentTarget.value + "px")
);
