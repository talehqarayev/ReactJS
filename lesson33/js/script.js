/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

document.addEventListener("DOMContentLoaded", () => { // Мы пишем скрипты внутри этого метода чтобы ДОМ деревьие загрузилось польностью и потом JavaScript коды начались грузиться на странице

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
          oldFilms = document.querySelector(".promo__interactive-list"),
          addForm = document.querySelector("form.add"),
          addInput = addForm.querySelector(".adding__input"),
          addCheckbox = addForm.querySelector("[type='checkbox']");

    addForm.addEventListener("submit", (e) => {
        e.preventDefault(); // отменить стандартное поведение браузера, не обновляется автоматически

        let newFilm = addInput.value;
        const favorite = addCheckbox.checked;

        // Если пользователь вводит что-то ТОГДА происходит ниже операция, а если это переменная пуста то при нажатии кнопки ничего не происходит

        if (newFilm) { 

            // ЗАДАНИЕ - 2
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            // ЗАДАНИЕ - 4

            if(favorite) {
                console.log("Добавляем любимый фильм");
            }


        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
        createMovieList(movieDB.movies, oldFilms);

        }

        e.target.reset();
    });

    
    // ЗАДАНИЕ - 1 автоматизированный способ удалить данные из псевдомассива

   const deleteAdv = (argument) => {
        argument.forEach(item => {
        
            item.remove();
        });
   };
   
   deleteAdv(adv);
       
    const makeChanges = () => {

            // ЗАДАНИЕ - 2
        genre.textContent = "драма"; // поменять текст внутри элемента
        
            // ЗАДАНИЕ - 3
        poster.style.backgroundImage = 'url("img/bg.jpg")'; // изменить картинку фона динамически. Кавычки должны быть двойные или одинарные внутри скобок или наоборот

    };

    makeChanges();
    
    // ЗАДАНИЕ - 4
    const sort = (argument) => {
        argument.sort();
    };
    
    // sort(movieDB.movies);

    
    // querySelector и querySelectorAll разница в том что, первый не создает HTML псевдомассив потому что вибрает один элемент, а второй создает потом что выбирает несколько

    function createMovieList(films, parent) {
        parent.innerHTML = ""; // очистить предыдущие значения в массиве
        sort(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        // ЗАДАНИЕ - 3

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        }); 
    }

    createMovieList(movieDB.movies, oldFilms);

});