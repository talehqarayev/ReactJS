/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      oldFilms = document.querySelector(".promo__interactive-list");


    // простой способ удалить данные из псевдомассива
    // ОБЯЗАТЕЛЬНО СТАВИТЬ индекс после имени псевдомассива, иначе функции не применяются самому псевдомассиву

// adv[0].remove();
// adv[1].remove();
// adv[2].remove();


// ЗАДАНИЕ - 1 автоматизированный способ удалить данные из псевдомассива

// adv.forEach(function (item) {

//     item.remove();
// });

adv.forEach(item => {

    item.remove();
});


// ЗАДАНИЕ - 2
genre.textContent = "драма"; // поменять текст внутри элемента

// ЗАДАНИЕ - 3
poster.style.backgroundImage = 'url("img/bg.jpg")'; // изменить картинку фона динамически. Кавычки должны быть двойные или одинарные внутри скобок или наоборот


// ЗАДАНИЕ - 4

oldFilms.innerHTML = ""; // очистить предыдущие значения в массиве
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    oldFilms.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});

// querySelector и querySelectorAll разница в том что, первый не создает HTML псевдомассив потому что вибрает один элемент, а второй создает потом что выбирает несколько