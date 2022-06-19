'use strict';

// localStorage.setItem("number", "5"); // присвоить данные

// localStorage.getItem("number"); // получать нужное

// localStorage.removeItem("number"); // удалить определенное содержимое

// localStorage.clear(); // удалить все содержимое


const checkbox = document.querySelector("#checkbox"),
      form = document.querySelector("form"),
      btn = document.querySelector("#color");

    if (localStorage.getItem("isChecked")) {
        checkbox.checked = true;
    }

    if(localStorage.getItem("bg") === "changed") {
        form.style.backgroundColor = "red";

    }  

    checkbox.addEventListener("change", () => {
        localStorage.setItem("isChecked", true);
    });

    btn.addEventListener("click", () => {
        if(localStorage.getItem("bg") === "changed") {
            localStorage.removeItem("bg");
            form.style.backgroundColor = "#fff";

        }   else {
            localStorage.setItem("bg", "changed");
            form.style.backgroundColor = "red";
        }
    }); 


    const person = {
        name: "Taleh",
        age: 25
    }

    const serializedPerson =  JSON.stringify(person);
    localStorage.setItem("Taleh", serializedPerson);
