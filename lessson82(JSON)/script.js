"use strict";

// Все данные должны быть внутри " "

const person = {
    name: "Taleh",
    phone: "+994554656622",
    family: {
        dad: "Abdul",
        mom: "Gultakin", 
        bro: "Shahin"
    }
};


// console.log(JSON.stringify(person)); // берет объект JavaScript и трансформирует его в строку JSON
// console.log(JSON.parse(JSON.stringify(person))); // берет строку JSON и трансформирует ее в объект JavaScript

const clone = JSON.parse(JSON.stringify(person));
clone.family.mom = "Gulu";
console.log(person);
console.log(clone);


