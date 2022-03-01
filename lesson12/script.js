"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms, // Передаем сюда количество фильмов
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    // Задаем вопросы повторно

const a = prompt("Один из просмотренных фильмов?", ''),
      b = prompt("На сколько его оцените", ""),
      c = prompt("Один из просмотренных фильмов?", ''),
      d = prompt("На сколько его оцените", "");


    // Задаем в формате вопрос: ответ

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);