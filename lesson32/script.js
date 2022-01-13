

// console.log(document.body); // обращение к тегу body
// console.log(document.head); // обращение к тегу head

// console.log(document.documentElement); // обращение к самому HTML страницу


// // получаем теги внутри родительского тега body
// console.log(document.body.childNodes); // внутри NodeList text это пробелы считаются на странице

// // ДОМ деревья и ДОМ узел - все что видим на странице это все ДОМ элементы, но каждый узел не ДОМ элемент

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector("#current").parentNode); // получаем родителя данного элемента. Если писать еще раз команду за командой, то получаем еще высшего родителя
// console.log(document.querySelector("#current").parentElement);

// DATA АТРИБУТЫ

// Разница в том что, когда Element пишем тогда получаем либо предыдушего, либо следующего элемента. А когда просто пишем тогда можем получать и ПЕРЕНОСЫ строк.

// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

console.log(document.querySelector('[data-current="3"]').previousElementSibling);
console.log(document.querySelector('[data-current="3"]').nextElementSibling); 
