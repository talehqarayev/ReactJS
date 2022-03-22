"use strict";

const object = {
    a: 5,
    b: 4,
    c: 3
};

const copyOfObj = object; // здесь приравнивается ссылка к этому объекту, а не сам объект кладется сюда

const add = {
    d: 12,
    c: 7
};

console.log(Object.assign(object, add)); // объединяем объекты и создается новый

const oldArr = ["a", "b", "c"];
const newArr = oldArr.slice(); // позволяет скопировать массив

        // SPREAD OPERATORS FOR COPYİNG
        
const music = ["rock", "pop", "relax"],
      singers = ["Adele", "Rihanna", "Duman"],
      internet = [...music, ...singers];

console.log(internet);