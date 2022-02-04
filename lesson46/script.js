"use strict";


// обычная функция: this = window, если "use strict" тогда - undefined
function showThis() {
    console.log(this);
}
showThis();



// this у методов объекта = сам объект
const obj = {
    a: 10,
    b: 20,
    sum: function() {
        console.log(this);
    }
};
obj.sum();



// this в конструкторах и классах = новый экземпляр объекта
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello!" + this.name);
    };
}

let Taleh = new User("Taleh", 26); // новый экземпляр объекта



// Ручная привязка this: call, apply, bind
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
    const user = {
        name: "Taleh"
    };

    // отличаются только синтаксисом
sayName.call(user, " Qarayev");
sayName.apply(user, [" Qarayev"]);


// часто используемый метод
function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(8));



// Когда callBack функция в классическом виде вызывается, то this = сам обработчик событий (this === e.target)
// А когда стрелочная функция используется, то this === undefined
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    console.log(this);
    this.style.backgroundColor = "blue";
});