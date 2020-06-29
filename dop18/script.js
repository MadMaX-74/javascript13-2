


function countTimer(deadline) {
    // eslint-disable-next-line no-unused-vars
    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60 % 60)),
            hours = Math.floor(timeRemaining / 60 / 60),
            days = Math.floor(timeRemaining / 60 / 60 / 24);
        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        };
    }
    function updateClock() {
        const timer = getTimeRemaining();

        console.log(`До нового года осталось: ${timer.days} дней`);
    }
    updateClock();
}




//Время дня
function getDayTime() {
    const today = new Date();
    const time = today.getTime(),
        timeHours = Math.floor(time / 60 / 60);
    if (timeHours >= 6 && timeHours <= 12) {
        console.log('Доброе утро');
    } else if (timeHours > 12 && timeHours < 18) {
        console.log('Добрый день');
    } else if (timeHours >= 18 && timeHours <= 22) {
        console.log('Добрый вечер');
    } else {
        console.log('Доброй ночи');
    }
}

// Неделя
function getWeekDay() {
    const today = new Date();
    const week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const date = week[today.getDay()];
    return date;
}

//время
function getTime() {
    const today = new Date(),
        options = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        },
        now = today.toLocaleString("en-US", options);
    console.log('Сейчас: ' + now);
}

getDayTime();
console.log('Сегодня: ' + getWeekDay());
getTime();
countTimer('01 January 2021');
