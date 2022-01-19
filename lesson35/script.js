/* DEFER - преимущество в том что, загружает любой скрипт по очереди и можно в HEAD теги подключать эти скрипты, 
           потому что скрипты загружаются на заднем фоне
*/

// ASYNC - особоенность в том что, абсольютно независимыми становятся скрипты, и выполняются без очереди кто быстрее тот и грузится

const p = document.querySelectorAll("p");

console.log(p);





function loadScript(src) {

    const script = document.createElement("script");
    script.src = src;
    script.async = false; // скрипт будет вести себя как обычный скрипт а не хаотично
    document.body.append(script);

}

loadScript("test.js");
loadScript("anotherScript.js");

