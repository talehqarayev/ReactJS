window.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll(".tabcontent"),
          tabsParent = document.querySelector(".tabheader__items");
   
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = "none";
        });

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active"); 
        });
    }
    hideTabContent();

    function showTabContent(i) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active"); 
    }
    showTabContent(0);

    tabsParent.addEventListener("click", (e) => {
        const target = e.target;

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // MODAL WINDOW

    const modalTrigger = document.querySelectorAll("[data-modal]"),
          modal = document.querySelector(".modal"),
          modalClose = document.querySelector("[data-close]");
    
    function openModal() {
        modal.style.display = "block";
        // modal.classList.toggle("show"); // АЛЬТЕРНАТИВА 
        document.body.style.overflow = "hidden"; // при открытом модальном окне не скролится страница
        clearInterval(modalTimerId); // если пользователь сам открывает модальное окно один раз то очищаем автоматическое выскачивание
    }

    modalTrigger.forEach(item => {

        item.addEventListener("click", openModal);

    });
    

    // DON'T REPEAT YOURSELF - по этому принципу мы можем вынести повторяющиюся часть кода в функцию и один раз пишем, а потом вызываем в нам нужном месте

    function closeModal() {
        modal.style.display = "none";
        // modal.classList.toggle("show");
        document.body.style.overflow = "";
    }

    modalClose.addEventListener("click", closeModal);

    
    modal.addEventListener("click", (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });

    
    // modalClose.addEventListener("click", () => {

    //     modal.style.display = "none";
    //     // modal.classList.toggle("show"); // // АЛЬТЕРНАТИВА 
    //     document.body.style.overflow = ""; // при закрытом модальном окне ВЕРНУТЬ функцию скролла на странице
    // });


    // // с помощью данного метода можем, кликнуть в любом месте и закрывается модальное окно
    // modal.addEventListener("click", (e) => {

    //     if(e.target === modal) {
    //         modal.style.display = "none";
    //         document.body.style.overflow = ""; 
    //     }
    // });


// с помощью кнопки ESC закрываем модальное окно. Метод - keydown помогает найти код кнопки и при нажатии данной кнопки происходит процесс, который мы указываем
    document.addEventListener("keydown", (e) => {
        
        if(e.code === "Escape") {
            modal.style.display = "none";
            document.body.style.overflow = "";
        }
    });

    // Через 5 секунд модальное окно автоматически выскачивается на странице
    const modalTimerId = setTimeout(openModal, 5000);


    // Скролим до конца страницы и открывается модальное окно
    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll); // с помощью этой функции делаем так, чтобы метод срабатывал ОДИН РАЗ когда проскролили до конца страницы
        }
    }
    window.addEventListener("scroll", showModalByScroll);



    
     // liveTimer

const deadline = '2022-06-20';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor( (t/(1000*60*60*24)) ),
        seconds = Math.floor( (t/1000) % 60 ),
        minutes = Math.floor( (t/1000/60) % 60 ),
        hours = Math.floor( (t/(1000*60*60) % 24) );

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num){
    if (num >= 0 && num < 10) { 
        return '0' + num;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadline);
});