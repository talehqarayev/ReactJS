"use strict";

// const massiv = [1,2,3,4,5];

// massiv.pop(); // удаляет последний элемент массива
// massiv.push(10); // добавляет элемент в конец массива

// console.log(massiv);

// massiv.forEach(function(item, i, massiv) {
//     console.log(`${i}: ${item} in the massiv ${massiv}`);
// });


const str = prompt("", "");
const product = str.split(", "); // разделитель элементов массива
product.sort(compareNumber); // сортировка по альфавиту
console.log(product.join(";")); // объединяет элементов массива

// 
function compareNumber (a, b) {
    return a -b;
}

// У ПСЕВДОМАССИВА НЕТ СВОЙСТВ И ФУНКЦИИ В ОТЛИЧИИ ОТ МАССИВА