'use strict';

const box = document.getElementById("box");

console.log(box);

// const btns = document.getElementsByTagName("button");
const btns = document.getElementsByTagName("button")[1]; // выбираем элемент по индексу 1 в псевдомассиве

console.log(btns);


const circles = document.getElementsByClassName("circle");

console.log(circles);





        // СОВРЕМЕННЫЕ МЕТОДЫ ПОЛУЧЕНИЙ ЭЛЕМЕНТОВ

const hearts = document.querySelectorAll(".heart");

console.log(hearts);

// по одному показывает элементов ПСЕВДОМАССИВА
hearts.forEach(item => {
    console.log(item);
});



    // У ПСЕВДОМАССИВА НЕ БЫВАЮТ СВОЙСТВА, МЕТОДЫ КАК У МАССИВА. ПОЭТОМУ ДЛЯ ИСПОЛЗОВАНИЯ ЭЛЕМЕНТОВ ВНУТРИ ПСЕВДОМАССИВОВ НАДО УКАЗАТЬ ИНДЕКС ЧЕТКО