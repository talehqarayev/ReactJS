"use strict";

// const btns = document.querySelector("#btn"),
//       link = document.querySelector("a");

// btns.addEventListener("mouseenter", (event) => {
//     console.log(event.target); // можно отделные методы выносить в консоль из объекта данного элемента
//     // event.target.remove(); можно удалить, добавить и тп действия произвести над элементами
//     console.log("Your mouse on the button now");
// });



// Устаревщий код, но иногда встречается в проектах. Получаем кнопку, и при наведении на него срабатывает наша функция

// btns.onmouseover = function () {

//     console.log("Your mouse on the button now");
// };




// Современный метод. Event or e объект событий который описывает элемент что именно содержит в себе. Используется как ПЕРВЫЙ АРГУМЕНТ функции

const btns = document.querySelectorAll("button"),
      link = document.querySelector("a");

btns.forEach(btn => { // когда надо на всех кнопках сделать тоже самое, используем перебирающую функцию
    btn.addEventListener("mouseenter", ()=> {
        console.log("Your mouse on the button now");
    });
});


// В веб-приложениях будет часто использоваться

link.addEventListener("click", function(event) {
    event.preventDefault();     // Командует останавиться то есть не разрешает перейти по ссылке
});


//

