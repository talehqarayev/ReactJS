const btns = document.querySelectorAll("button"),
      wrapper = document.querySelector(".btn-block");

// console.log(btns[0].classList.length); // Количество классов в теге
// console.log(btns[0].classList.item(0)); // указываем индекс класса у элемента
// console.log(btns[0].classList.add("yellow", "grey")); // добавить класс в тег, если надо можно через запятю добавить несколько классов
// console.log(btns[0].classList.remove("some")); // удаляет класс из тега
// console.log(btns[0].classList.toggle("blue")); // Если класс существует то убирает, если его нет то добавляет

// if(btns[1].classList.contains("red")) { // Проверяет есть ли в этом индексе такой класс
//     console.log("red");
// }
 
btns[0].addEventListener("click", () => {

    // if (!btns[1].classList.contains("red")) {
    //     btns[1].classList.add("red");
    // } else {
    //     btns[1].classList.remove("red");
    // }

    btns[1].classList.toggle("red");
});

// console.log(btns[0].className); // ЭТО СТАРИЙ МЕТОД ПОЛУЧЕНИЕ КЛАССА


// ДЕЛЕГИРОВАНИЕ - Если элемент подходит под условия, тогда выполняется функция. При динамическим изменений ТОЖЕ ДЕЙСТВУЕТ

wrapper.addEventListener("click", (e) => { // Это функция срабатывает на тот элемент который создается динамически после элемента

    if (e.target && e.target.tagName == "BUTTON") {
        console.log("Clicked");
    }

});


// btns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         console.log("Clicked");
//     });
// });

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);