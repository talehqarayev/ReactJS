"use strict";



    // Лучше называть функции глаголом, который описывает действие данной функции

function showMessage () {
    console.log("It is a first function");
}

showMessage();



function calc (a, b) {
    return (a + b); // Окончание функции. После return не задаем ничего, потому что этот код не выполнится никогда
}

console.log(calc(4, 5));
console.log(calc(7, 3));