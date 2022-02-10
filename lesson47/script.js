"use strict";


// Шаблонизация процессов

class Kvadrat {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class RengliKvadrat extends Kvadrat {     // Наследование от родителского класса

    constructor(height, width, text, bgColor) {
        super(height, width); // чтобы не скопировать что было у родителя, используем этот метод при наследовании
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyparametrs() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}

const div = new RengliKvadrat(8, 10, "Hello World!", "green");

div.showMyparametrs();

console.log(div.calcArea());

// const dordbucaqli = new Kvadrat(5,3);
// const long = new Kvadrat(7,6);

// console.log(dordbucaqli.calcArea());
// console.log(long.calcArea());


