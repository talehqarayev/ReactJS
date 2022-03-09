"use strict";

let number = 30;

// while (number < 35) {
//     console.log(number);
//     number++;
// }

// do {
//     console.log(number);
//     number++;
// } while (number < 35);


for (let i = 0; i < 10; i++) {
    if (i === 6) {
        // break;
        continue; // убирает тот шаг с цикла, который не нужен не останавливая работу всего цикла
    }
    console.log(i);
}