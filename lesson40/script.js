"use strict";

// В ДАТЫ МЕСЯЦ НАЧИНАЕТСЯ С 0. То есть 0 - январь, 11 - декабрь

const now = new Date(); // создаем дату и помещаем в переменную now 
// new Date.parse(); // ТОЖЕ САМОЕ
   

    //GET

// console.log(now.getFullYear()); // получаем данный год
// console.log(now.getMonth());    // получаем данный месяц
// console.log(now.getDate());     // получаем данный день в месяце
// console.log(now.getDay());      // получаем данный день в недели
// console.log(now.getHours());    // получаем данный час по нашему времени
// console.log(now.getUTCHours()); // получаем данный час UTC  // Когда нужно работать с другом часовом поясом тогда, исполуется UTC

// console.log(now.getTimezoneOffset()); // разница в часовых поясах В МИНУТАХ / 240 минут = 4 часа
// console.log(now.getTime()); // получаем количество миллисекундов с первого января до данного времени года


    //SET

// console.log(now.setHours(18)); // устанавливаем часы в скобках
// console.log(now);   //  в консоль выходит тот час которого мы устанавливали


let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за  ${end - start} миллисекунд`);