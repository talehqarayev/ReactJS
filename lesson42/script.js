"use strict";


const btn = document.querySelector("button"),
      box = document.querySelector(".box");


btn.addEventListener("click", () => {

    box.style.height = box.scrollHeight + "px"; // при клике на кнопку раскрыть весь высоту
});


// const width = box.clientWidth; // получение размера ширины с паддингом без бордера, и маргина
// const height = box.clientHeight; // получение размера высоты с паддингом без бордера, и маргина
// console.log(width, height);

// const width = box.offsetWidth; // получение размера ширины с паддингом, бордера, и маргина
// const height = box.offsetHeight; // получение размера высоты с паддингом, бордера, и маргина
// console.log(width, height);


// const width = box.scrollWidth;
// const height = box.scrollHeight; // получаем в странице сколько пикселей скролили
// console.log(width, height);


console.log(box.getBoundingClientRect()); // получает все координаты элемента

console.log(box.getBoundingClientRect().bottom); // получает координаты bottom у данного элемента


const style = window.getComputedStyle(box); // при помощи этого метода можем получать стили псевдоэлементов. Эти стили приходят от СSS

console.log(style);
console.log(style.display); // получаем конкретного элемента

console.log(document.documentElement.scrollTop); // с помощью этого метода можем узнать сколько пикселей мы пролистали на странице

window.scrollBy(0, 500); // скролить с текущей позиции на 500 пикселей вниз

window.scrollTo(0, 500); // скролить с самого верха на 500 пикселей вниз