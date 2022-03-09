"use strict";



if (4 == 9) {      // Условия превращают любой тип данных в boolean чтобы проверять правда ли
    console.log("Okay");
} else {
    console.log("Not Okay");
}



// const number = 110;

// if (number < 35) {
//     console.log("Error");
// } else if (number > 100) {
//     console.log("it is too many");
// } else {
//     console.log("It is okay");
// }



    // В отличии от if, switch сравнивает сторо равно или нет

const number = 100;

switch (number) {
    case 49:
        console.log("Too few");
        break;
    case 100:
        console.log("It is okay");
        break;
    default:
        console.log("Not now");
        break;
}