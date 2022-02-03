"use strict";


// Создали числовой тип данных
const typeOfNumber = new Number(5);
console.log(typeOfNumber);



// Это конструктор для создания однотипных объектов - например, пользователи на сайте, товары в магазине
function user (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

class user {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello () {
        console.log(`Hello! ${this.name}`)
    }
    exit() {
        console.log(`User ${this.name} is left`)
    }
}

// новые пользователи создаем и они получают те данные которые в конструктуре
const Taleh = new user("Taleh", 25);
console.log(Taleh);

const Shahin = new user("Shahin", 23);
console.log(Shahin);