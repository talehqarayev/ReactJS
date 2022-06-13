"use strict";

const inputAzn = document.querySelector("#azn"),
      inputUsd = document.querySelector("#usd");


inputAzn.addEventListener("input", () => {
    const request = new XMLHttpRequest();

    // МЕТОДЫ 
        request.open("GET", "js/current.json"); // собирает настройки для будущего запроса
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");
        request.send();

        request.addEventListener("load", () => {
            if (request.status === 200) {
                // console.log(request.response);
                const data = JSON.parse(request.response);
                inputUsd.value = (+inputAzn.value / data.current.usd).toFixed(2); // округлить после точки
            } else {
                inputUsd.value = "Что-то пошло не так";
            }
        });
    // СВОЙСТВА
        // status - Статус нашего запроса. Например, 404, 200, 502 и тд
        // statusText - Текстовое описание ответа от сервера. Например, okey, created, badgateway
        // response - ответ от серввера, которого задал бакенд разработчик
        // readyState - текущее состояние нашего запроса

    // СОБЫТИЯ
        // 
});