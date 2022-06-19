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
          modal = document.querySelector(".modal");
    
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


    
    modal.addEventListener("click", (e) => {
        if(e.target === modal || e.target.getAttribute("data-close") == "") {
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

const deadline = '2022-07-20';

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


    // FORMS

    const forms = document.querySelectorAll("form");

    const messages = {
        loading: "img/spinner.svg",
        success: "Thank you. We will call you sooner",
        failure: "Something went wrong..."
    };
    
    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let statusMessage = document.createElement("img");
            statusMessage.src = messages.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.appendChild(statusMessage);
            form.insertAdjacentElement("afterend", statusMessage);

            const request = new XMLHttpRequest();
            request.open("POST", "server.php");
            // request.setRequestHeader("Content-type", "multipart/form-data");
            // ДЛЯ ОТПРАВЛЕНИЯ ДАННЫХ НА СЕРВЕР В ФОРМАТЕ JSON
            request.setRequestHeader("Content-type", "application/json; charset=utf-8");
            const formData = new FormData(form);


            const obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            const json = JSON.stringify(obj);
            request.send(json);

            // request.send(formData);
            request.addEventListener("load", () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(messages.success);
                    form.reset();
                    statusMessage.remove();
                } else {
                    showThanksModal(messages.failure);
                }
            });
        });
    }


    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");
        prevModalDialog.classList.add("hide");
        openModal();

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal();
        }, 3000);
    }


    // SLIDER

    let offset = 0;
    let slideIndex = 1;

    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector('.offer__slider-inner');

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent =  `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent =  slideIndex;
    }
    
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: green;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: 0.5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2); 
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent =  `0${slideIndex}`;
            } else {
                current.textContent =  slideIndex;
            }

            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex-1].style.opacity = 1;
        });
    });

});
