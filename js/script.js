/* eslint-disable no-inner-declarations */
/* eslint-disable no-constant-condition */
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
// eslint-disable-next-line strict
'use strict';

//timer
function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');


    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60 % 60)),
            hours = Math.floor(timeRemaining / 60 / 60);
        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    }

    function updateClock() {
        const timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        if (timer.hours < 10) {
            timerHours.textContent = '0' + timer.hours;
        }
        timerMinutes.textContent = timer.minutes;
        if (timer.minutes < 10) {
            timerMinutes.textContent = '0' + timer.minutes;
        }
        timerSeconds.textContent = timer.seconds;
        if (timer.seconds < 10) {
            timerSeconds.textContent = '0' + timer.seconds;
        }

        if (timer.timeRemaining > 0) {
            setInterval(updateClock, 1000);
        } else if (timer.timeRemaining == 0) {
            clearInterval(updateClock);
        } else {
            clearInterval(updateClock);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }
    updateClock();
}
countTimer('03 July 2020');

//menu
// eslint-disable-next-line no-unused-vars
const toggleMenu = ()  => {
    const menu = document.querySelector('menu'),
        body = document.querySelector('body');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };
    body.addEventListener('click', event => {
        const target = event.target;
        if (target.matches('.close-btn') || target.closest('.menu')) {
            handlerMenu();
        } else if (target.matches('menu')) {
            menu.classList.add('active-menu');
        } else {
            menu.classList.remove('active-menu');
        }
    });
};

toggleMenu();

//popup
const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            if (screen.width > 768) {
                let  opacity = 0;
                function getPopupAnim() {
                    popupContent.style.opacity = opacity;
                    opacity += 0.1;
                    if (opacity < 1) {
                        requestAnimationFrame(getPopupAnim);
                    } else {
                        // eslint-disable-next-line no-use-before-define
                        cancelAnimationFrame(requestId);
                    }
                }
                let requestId = requestAnimationFrame(getPopupAnim);
            } else {
                return;
            }
        });
    });

    popup.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }

    });
};

togglePopUp();

//tabs

const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = index => {
        for (let i = 0; i < tabContent.length; i++) {
            if (index === i) {
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };
    tabHeader.addEventListener('click', event => {
        let target = event.target;
        target = target.closest('.service-header-tab');
        if (target) {
            // eslint-disable-next-line no-loop-func
            tab.forEach((item, i) => {
                if (item === target) {
                    toggleTabContent(i);
                }
            });
        }

    });
};

tabs();

//slider

const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        slider = document.querySelector('.portfolio-content'),
        dotsList = document.querySelector('.portfolio-dots');

    let currentSlide = 0,
        interval;

    let dotsAdd = () => {
        slide.forEach(() => {
            let dot = document.createElement('li');
            dot.classList.add('dot');
            dotsList.append(dot);
        });
    };
    dotsAdd();

    let dot = document.querySelectorAll('.dot');
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    slider.addEventListener('click', event => {
        event.preventDefault();

        let target = event.target;

        if (!target.matches('.portfolio-btn, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', event => {
        if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', event => {
        if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
            stopSlide();
        }
    });

    startSlide(1500);
};

slider();


//photo

const changePhoto = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');
    commandPhoto.forEach(elem => {
        elem.addEventListener('mouseover', event => {
            event.target.src = event.target.dataset.img;
        });
    });
    console.log(commandPhoto);

    // Туст сделаем масив с прежникми картинками
    const arrSrc = [];
    commandPhoto.forEach(item => {
        arrSrc.push(item.src);
    });
    console.log(arrSrc);

    // Нужен массив, что бы методы работали
    const photoArray = Array.from(commandPhoto);

    //возвращаем картинки
    commandPhoto.forEach(elem => {
        elem.addEventListener('mouseout', event => {
            const index = photoArray.indexOf(event.target);
            event.target.src = arrSrc[index];
        });
    });

};

changePhoto();


//Ограничение ввода в калькулятор
const checkInputCalc = () => {
    const calcItemBlock = document.querySelector('.calc-block');

    calcItemBlock.addEventListener('input', e => {
        if (e.target.matches('input')) {
            e.target.value = e.target.value.replace(/\D/g, '');//Не вводит все нечисла
        }
    });
};
checkInputCalc();


// calc

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');


    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squereValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squereValue) {
            total = price * typeValue * squereValue * countValue * dayValue;
        }

        totalValue.textContent = total;
    };

    calcBlock.addEventListener('change', event => {
        const target = event.target;
        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
};
calc(100);
