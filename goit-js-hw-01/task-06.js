let input;
let total = 0;

do {
  input = prompt("Please enter number: ");
  if (Number.isNaN(Number(input))) {
    alert("This is not a number, try again.");
    continue;
  }
  total += Number(input);
  console.log(total);
} while (input !== null);

alert(`Total equals ${total}.`);
