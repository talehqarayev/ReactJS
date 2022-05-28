"use strict";


    // Конвертация в рубли, поэтому написано ОДИН МАНАТ/ЕВРО сколько рублей
    
const aznCurr = 47.8;

const eurCurr = 87.6;

function converter (amount, curr) {
    console.log(curr * amount);
}

converter(1000, aznCurr);
converter(600, eurCurr);



function sayHello(name) {
   return (`Hello, ${name}!`);
}

sayHello("Taleh");
