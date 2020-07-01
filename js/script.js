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
        console.log(target);
        if (target.closest('menu') || target.closest('.menu')) {
            handlerMenu();
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

