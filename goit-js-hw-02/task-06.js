const numbers = [];
let input;
let total = 0;

do {
  input = prompt("Пожалуйста, введите число: ");
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз.");
    continue;
  }
  numbers.push(input);
} while (input != null);

numbers.pop();

if (numbers.length > 0) {
  for (let number of numbers) {
    total += Number(number);
  }
  console.log(`Общая сумма чисел равна ${total}.`);
}
