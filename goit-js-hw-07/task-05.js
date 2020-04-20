const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

input.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  output.textContent = event.currentTarget.value;
}
