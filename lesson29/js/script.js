'use strict';

const box = document.getElementById("box"),
      circles = document.getElementsByClassName("circle"),
      btns = document.getElementsByTagName("button"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector(".heart");



console.dir(box); // посмотреть элемента в качестве объекта

box.style.backgroundColor = "green";
box.style.width = "300px";

btns[2].style.borderRadius = "100%"; // С ПСЕВДОМАССИВАМИ ОБЯЗАТЕЛЬНО НАДО УКАЗАТЬ [index]


 // Если надо поменять несколько стилей для одного объекта тогда удобнее будет писать так:

hearts[1].style.cssText = "background-color: black; border-radius: 50%; height: 80px;";


 // с помощью этой функции производим операцию над несколькими элементами

hearts.forEach(item => {
    item.style.backgroundColor = "black";
});



// СОЗДАНИЕ ЭЛЕМЕНТОВ ВНУТРИ JavaScript

const div = document.createElement("div");

div.classList.add("black"); // добавляем ЗАРАНЕЕ ОПРЕДЕЛЕННУЮ CSS класс .black в DIV // с помощью classList добавляем, удаляем, меняем свойства элементов

document.body.append(div); // Берем тег body и во внутрь В КОНЦЕ добавляем div с помощью функции APPEND

// document.body.prepend(div); // Берем тег body и во внутрь В НАЧАЛЕ добавляем div с помощью функции APPEND

// hearts[0].before(div); // добавляет элемент ДО данного элемента
// hearts[0].after(div); // добавляет элемент ПОСЛЕ данного элемента

// circles[2].remove(); // удаляет 3-го элемента со страницы

// hearts[0].replaceWith(circles[0]); // заменяет местами элементов

div.innerHTML = "Hello World!"; // с помощью этой функции добавляет HTML элементы в JavaScript

// div.textContent = "Hello World!"; // разница в том что эта функция работает только с ТЕКСТОМ

div.insertAdjacentHTML("beforebegin", "<h2>Hello!</h2>");
