const input = document.querySelector("input#validation-input");

const validLength = input.getAttribute("data-length");

input.addEventListener("blur", (event) => {
  const valueLength = event.currentTarget.value.length;
  valueLength > validLength
    ? input.classList.add("invalid")
    : input.classList.add("valid");
});
  