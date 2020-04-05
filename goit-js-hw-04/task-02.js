// // const inventory = {
// //   items: ['Knife', 'Gas mask'],
// //   add(itemName) {
// //     console.log(`Adding ${itemName} to inventory`);

// //     this.items.push(itemName);
// //   },
// //   remove(itemName) {
// //     console.log(`Removing ${itemName} from inventory`);

// //     this.items = this.items.filter(item => item !== itemName);
// //   },
// // };

// // const invokeInventoryAction = function(itemName, action) {
// //   console.log(`Invoking action on ${itemName}`);
// //   action(itemName);
// // };

// // invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// // // Invoking action on Medkit
// // // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// // invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // // Invoking action on Gas mask
// // // Removing Gas mask from inventory

// // console.log(inventory.items); // ['Knife', 'Medkit']


// // #######################################################
// // Створити метод compact який приймає масив і вертає новий де відсутні будь-які значення що при переведені в bool дають false

// // function compact(array) {
// //   const length = array.length;
// //   const newArr = [];
// //   for (let i = 0; i < length; i++) {
// //     if (array[i] != false && array[i] !== null) {
// //       newArr.push(array[i]);
// //     }
// //   }
// //   return newArr;
// // }

// // console.log(compact([1,0,'', null, 'Hello'])); // [1,'Hello']


// // #######################################################
// // Написати ф-ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.
// // Якщо прогрес доставки 100 показувати строку "Done"
// // Якщо прогрес доставки < 100 показувати строку "In progress"
// // Якщо прогрес доставки null показувати строку "Ready for delivery"



// // function showDeliveryStatus(arr) {

// //   let type = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     // if (!arr[i]) {
// //     //   console.log('Not ordered');
// //     //   break;
// //     // }

// //     while (arr[i].type !== type || type === 3) {
// //       console.log('Not ordered');
// //       type++;
// //     }

// //     if (arr[i].type === type) {
// //       if (arr[i].deliveryProgress === 100) {
// //       console.log('Done');
// //       } else if (arr[i].deliveryProgress < 100 && arr[i].deliveryProgress > 0) {
// //         console.log('In progress');
// //       } else if (arr[i].deliveryProgress === null) {
// //         console.log('Ready for delivery');
// //       }
// //       type++;
// //     }
// //   }
// // }

// // const ordersA = [
// // { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
// // { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
// // { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
// // ];

// // const ordersB = [
// // { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
// // { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
// // ];

// // console.log(showDeliveryStatus(ordersA)); // "In Progress", "Done", "Ready for delivery"
// // console.log(showDeliveryStatus(ordersB)); // "In progress", "Not Ordered", "Ready for delivery"

// // #################################################################
// // Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи



// // function median(arr) {
// //     const length = arr.length;
// //     let median = 0;
// //     if (length % 2 === 0) {
// //         median = ((arr[length/2-1] + arr[length/2])) / 2;
// //     } else {
// //         median = Math.round(length/2);
// //     }
// //     console.log(median);
// // }

// // median([1, 2, 3, 4, 5]); // 3
// // median([3, 6, 10, 15, 20, 99]); // 12.5
// // median([1,3,4,5,6,4,5,6,7,8]);


// // #################################################################
// // Написати ф-ю median яка приймає масив і знаходить його медіану Медіана – це числове значення, яке ділить відсортований масив 
// // чисел на більшу і меншу половини. У відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. 
// // Для масиву з парним числом елементів, де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел, 
// // які знаходяться в середині масиву. В цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану даного масиву.
// // median([1, 2, 3, 4, 5]) // 3
// // median([3, 6, 10, 15, 20, 99]) // 12.5
// // #################################################################
// // Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару) Ця ф-я має повернути ціну замовлення
// // const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 } const orderA = { apple: 5, cheese: 1, bread: 3 } const orderB = { orange: 10, pork: 2, bread: 1 }
// // #################################################################
// // Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false
// // isObjectEmpty({}) // true
// // isObjectEmpty({name: 'user, age: {21}}) // 


// const scientist = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
//   ];

//   /*
// Написати ф-ю convertToPrc(container, block) яка приймає розміри контейнера та розміри блока в форматі строк і повертає значення блока в %. Якщо результат дробовий округлювати до двох знаків після коми.
// console.log('1000px', '100px'); //10%
// console.log('950px', '150px'); // 15.79%
// */

// function convertToPrc(container, block) {
//     return `${((Number.parseInt(block)) / (Number.parseInt(container)) * 100).toFixed(2)}%`;
// }

// console.log(convertToPrc('1000px', '100px'));
// console.log(convertToPrc('950px', '150px'));


// // console.log('1000px', '100px'); //10%
// // console.log('950px', '150px'); // 15.79%

// /*
// Написати ф-ю pxConvertor(from, to, block, container)  яка приймає параметри:
// from - одиниці з яких конвертувати, 
// to - одиниці в які конвертувати, 
// block - розміри блока для конвертації, 
// container - розмір контейнера. Всі параметри це строки. Ф-я повертає результат або % або rem.
// console.log('px', 'rem', 16); // 1rem
// console.log('px', 'rem', 24); // 1.5rem
// console.log('px','%', 100px', '1000px'); //10%
// console.log('px', '%', '150px', '950px'); // 15.79%
// */
// const map = {
//     "usd": 1,
//     "uan": 27,
//     "ru": 88,
//     "eur": .92  
// }
// function convertor(from, to, value){
//   const fromPer = map[from];
//   const toPer = map[to];
//   const baseValueInUsd = value / fromPer;
//     return (baseValueInUsd * toPer).toFixed(2) +' '+ to;
// }
// console.log(convertor('usd','uan', 2));
// console.log(convertor('uan','usd', 60));
// console.log(convertor('ru','eur', 189));
// console.log(convertor('eur','usd', 5));
// console.log(convertor('uan','ru', 255));
// console.log(convertor('ru','uan', 255));
// console.log(convertor('yyuu','uan', 255));
// console.log(convertor('ru','hhg', 255));


function nonUniqueElements(arr) {
  const obj = {};
  const unique = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      unique.push(key);
    }
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] == unique[j]) {
        arr.splice(i,1);
      }
    }
  }
  console.log(arr);  
}
nonUniqueElements([1, 2, 3, 1, 3]); // [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) // []
nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]
