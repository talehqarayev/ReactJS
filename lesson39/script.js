// const timedId = setTimeout(function() {

//     console.log("Hello");

// }, 2000); // миллисекунда 



// const timedId = setTimeout(logger, 2000); // задерживает выполнение ДАННОЙ функции на 2000 миллисекунды / 2 секнуды

//     clearInterval(timedId); // очищает/останавливает работы данной функции



        // ПОМЕСТИТЬ ФУНКЦИЮ ПО ОТДЕЛЬНОСТИ В ЭТОТ МЕТОД

const btn = document.querySelector(".btn");
let timedId,
    i = 0;

function myAnimation() {
    const element = document.querySelector(".box");
    let position = 0;

    const id = setInterval(frame, 10);
    function frame () {
         if (position === 300) {
             clearInterval(id);
         } else {
             position++;
             element.style.top = position + "px";
             element.style.left = position + "px";
         }
    }
}

btn.addEventListener("click", myAnimation);

// btn.addEventListener("click", () => {
    
//     // const timedId = setTimeout(logger, 2000);
//     timedId = setInterval(logger, 2000); // каждые 2 секунды повторяется функция
    
// });

// function logger () {
//     if ( i === 3) {
//         clearInterval(timedId);
//     }
//     console.log("Hello");
//     i++;
// }