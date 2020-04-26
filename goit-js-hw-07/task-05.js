const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");
const defaultValue = output.textContent;

input.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  event.currentTarget.value
    ? (output.textContent = event.currentTarget.value)
    : (output.textContent = defaultValue);
}