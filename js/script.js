"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // const a = prompt('Один из последних просмотренных фильмов?', ''),
// //       b = prompt('На сколько оцените его?', ''),
// //       c = prompt('Один из последних просмотренных фильмов?', ''),
// //       d = prompt('На сколько оцените его?', '');

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {

//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        
//         personalMovieDB.movies[a] = b;
//         console.log("Done!");
//     } else {
//         console.log("Error");
//         i--;
//     }

// }





// if (personalMovieDB.count < 10) {

//     console.log("Просмотрено довольно мало фильмов");

// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);






// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {

//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
    

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            
//         personalMovieDB.movies[a] = b;
//         console.log('done');

//     } else {
//             console.log('error');
//             i--;
//     }

// }



// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");

// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");

// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");

// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);



// let time = +prompt("Сколько у вас время?");


// if (time < 12) {
//     console.log("Good Morning!");
// } else if (time >= 12 && time < 17) {
//     console.log("Good afternoon!");
// } else if (time >= 17 && time < 23) {
//     console.log("Good Evening");
// } else {
//     console.log("Have a Good Night!");
// }



// function showPlus (a, b) {
//     return (a + b);
// }

// console.log((showPlus(5,7)));


        


        // ОПЕРАЦИЯ СО СТРОКАМИ


// const string = "Shukran";

// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

// console.log(string[2]);
// console.log(string.length);



// const fio = "Shukran Garayev is programmist"; // когла получаем в результате -1, это означает такой буквы, цифра не существует
// console.log(fio.indexOf("Garayev"));
// console.log(fio.slice(8, 15));
// console.log(fio.substring(8, 15)); // отличается от slice тем, что не принимает минусовые значения
// console.log(fio.substr(0, 15)); // отличается от slice, substring тем, что во второй части пишется сколько символов нужно именно а не конец слова




        // ОПЕРАЦИЯ С ЧИСЛАМИ


// const num = 15.5;

// console.log(Math.round(num)); // округление

// const pixel = "17.5px";

// console.log(parseInt(pixel));
// console.log(parseFloat(pixel));




        // ОПЕРАЦИЯ С ОБЪЕКТАМИ

        
// const phone = {

//         name: "Iphone",
//         model: "6S",
//         memory: "64GB",
//         color: "Gray",
//         batteryLife: "79%",
//         price: "180 AZN"
// };


// console.log(Object.keys(phone).length); // посчитатет количество элементов в объекте

// console.log(phone);

// delete phone.price;

// console.log(phone);



        // ОПЕРАЦИЯ С МАССИВАМИ

const massiv = [1,42,3,24,5];
massiv.sort(compareNumb);

function compareNumb (a, b) { // Функция для правильного сравнения числа правильно
    return (a - b);
}

massiv.forEach(function(item, i, massiv) {
    console.log(`${i}: ${item} in the massiv ${massiv}`);
});


massiv.pop(); // удаляет элемент с конца массива
massiv.push(10); // добаляет элемент в конце массива

console.log(massiv);



    // СФОРМИРОВАНИЕ МАССИВ НА ОСНОВЕ СТРОК

const str = prompt(",");
const products = str.split(",");
console.log(products);




	// ОПЕРАЦИЯ СО ЗНАЧЕНИЯМИ ОБЪЕКТОВ

const Obyekt = {
	bir: 1,
	iki: 2,
	uc: 3
};

const yeniObyekt = {
	dord: 4,
	bes: 5,
	alti: 6
};

const kesisme = Object.assign(Obyekt, yeniObyekt); // объединяет объекты
console.log(kesisme);



      // massiv.slice();  

const oldMassiv = [1, 2, 3, 4, 5];
const newMassiv = oldMassiv.slice();  // копирует массива в новый массив

console.log(newMassiv);



	// ... ОПЕРАТОР

const masin = ["bmw", "kia", "nissan"],
	  marka = ["M5", "RIO", "Sunny"],
	  avtomobil = [...masin, ...marka]; // ... объединяет массивов
 
console.log(avtomobil);



   // СТАНДАРТЫ ОБЪЕДИНЕНИЯ ES6-ES9
        
const mesgulluq = ["birSayli", "ikiSayli", "ucSayli", "dordSayli", "besSayli"],
      DMA = ["birlesmedenSonra", "basMesgulluqIdaresi"],
      struktur = [...mesgulluq, ...DMA]; // ... ОБЪЕДИНЯЕТ МАССИВОВ

console.log(struktur);




        // ООП ПРОГРАММИРОВАНИЕ

const soldier = {
        healthy: 100,
        armor: 89,
        height: 1.85,
        weight: 78
};


const soldierOne = Object.create(soldier); // создает прототип soldier-а для soldierOne

console.log(soldierOne.height); 




