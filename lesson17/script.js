"use strict";


const str = "test";
console.log(str.length); // с помощью такого свойства получаем ДЛИНУ РАЗНЫХ типов данных
console.log(str.toUpperCase()); // в конце метода ставим скобки чтобы сработал
console.log(str.toUpperCase()); // все ответы ползователя надо перевести в нижный регистер



    // Работа со строками

const hello = "Hello World";

console.log(hello.slice(6, 11)); // начало строки, конец строки. Вырезаем кусочек строки
console.log(hello.substring(6, 11)); // не принимает отрицательные значения


    // Округление числа

const number = 12.4;
console.log(Math.round(number));

const test ="15.7px";
console.log(parseInt(test));