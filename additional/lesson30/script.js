"use strict";

let answerOfUser = +prompt("How old are you?", "").trim(); // этот метод очищает значение от пробелов

if (answerOfUser != "" && answerOfUser != "null" && !isNaN(answerOfUser)) {

    console.log(answerOfUser);
} else {
    console.log("Надо ввести только число!");
}