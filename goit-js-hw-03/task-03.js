const findBestEmployee = function(employees) {
  const values = Object.values(employees);
  const highestValue = Math.max(...values);
  const entries = Object.entries(employees);
  for (const entry of entries) {
    if (entry[1] === highestValue) {
      return entry[0];
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
