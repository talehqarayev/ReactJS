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

const deadline = '2022-02-20';

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


    // КОНСТРУКТОРЫ - КЛАССЫ

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 1.70;
            this.changeToAZN();
        }

        changeToAZN() {
           this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement("div");
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> AZN/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }    
    }

    let div = new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        10,
        ".menu .container"
    );
    div.render();

    div = new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        12,
        ".menu .container"
    );
    div.render();

    div = new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков',
        8,
        ".menu .container"
    );
    div.render();
});