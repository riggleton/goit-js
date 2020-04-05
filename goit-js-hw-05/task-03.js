const Storage = function (array) {
  this.items = array;
};

Storage.prototype.getItems = function () {
  console.log(this.items);
};

Storage.prototype.addItem = function (item) {
  this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
  if (this.items.includes(item)) {
    this.items.splice(this.items.indexOf(item), 1);
  }
};

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
