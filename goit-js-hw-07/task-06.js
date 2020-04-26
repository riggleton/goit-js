const input = document.querySelector("input#validation-input");

const validLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", (event) => {
  input.classList.remove("invalid");
  input.classList.remove("valid");
  const valueLength = event.currentTarget.value.length;
  input.classList.add(valueLength !== validLength ? "invalid" : "valid");
});
