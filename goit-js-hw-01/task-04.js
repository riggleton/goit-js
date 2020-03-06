let credits = 23580;
const pricePerDroid = 3000;

let quantity = prompt("Сколько дроидов Вы хотите купить?");
let totalPrice;
let balance;

if (!quantity) {
  console.log("Отменено пользователем!");
} else if (Number.isNaN(Number(quantity))) {
  console.log("Это не число!");
} else {
  totalPrice = pricePerDroid * quantity;
  totalPrice <= credits
    ? console.log(
        `Вы купили ${quantity} дроидов, на счету осталось ${credits -
          totalPrice} кредитов.`
      )
    : console.log("Недостаточно средств на счету!");
}
