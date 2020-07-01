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
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
};
toggleMenu();

//popup
const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content'),
        height = document.documentElement.clientHeight;

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            if (screen.width > 768) {
                let count = 0;
                function getPopupAnim() {
                    count++;
                    popupContent.style.top = 10 * count + 'px';
                    if (15 * count < height / 5) {
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

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });
};
togglePopUp();

popupBtn.forEach(elem => {

    elem.addEventListener('click', () => {
        popup.style.display = 'block';
        console.log(screen.width);

        if (screen.width < 768) {
            return;
        } else {
            let start = 0;

            function step() {

                start++;
                popupCont.style.top = 15 * start + 'px';

                if (15 * start < height / 5) {
                    requestAnimationFrame(step);
                } else {
                    cancelAnimationFrame(requestId);
                }
            }

            let requestId = requestAnimationFrame(step);
        }
    });
});
