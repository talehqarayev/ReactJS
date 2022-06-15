"use strict";


    // МЕТОДЫ МАССИВА

// Метод forEach не возвращает новый массив. Остальные методы - filter, map, some/every, reduce СОЗДАЕТ НОВЫЙ МАССИВ

// FILTER

// const names = ["Alex", "Shukran", "Abulhakim", "Leo"];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);



// MAP

// const answers = ["IVan", "AnN", "ShukAN", "HellO"];

// const result = answers.map( item => {
//     return item.toLowerCase();
// });
// console.log(result);


// EVERY/SOME - boolean

// const some = [4, "affb", "bnxnv"];

// console.log(some.some(item => typeof(item) === "number"));

// const every = [4, 5, 7];

// console.log(every.every(item => typeof(item) === "number"));



// REDUCE - суммирует все элементы внутри массива

// const arr = [4, 5, 1, 2, 6];

// const result = arr.reduce((sum, current) => sum + current);

// console.log(result);


// const arr = ["apple", "cherry", "kiwi"];

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(result);


// ПРАКТИЧЕСКИЙ ПРИМЕР

const obj = {
    Taleh: "person",
    Anna: "person",
    dog: "animal",
    cat: "animal"
};

const newArr = Object.entries(obj)
.filter(item => item[1] === "person") // по филтру подобрали только человека
.map(item => item[0]); // подобрали из человек только их имена

console.log(newArr);