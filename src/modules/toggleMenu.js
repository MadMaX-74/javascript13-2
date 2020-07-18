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
        } else if (target.matches('menu ul li')) {
            menu.classList.add('active-menu');
        } else {
            menu.classList.remove('active-menu');
        }
    });

    const scrolling = () => {
        //плавная прокрутки при нажатии на меню
        menu.addEventListener('click', event => {
            const target = event.target;

            if (target.closest('menu ul>li>a')) { //выбираем ссылки
                event.preventDefault();//отменим стандартное поведение
                const link = target.closest('menu ul>li>a').getAttribute('href');//получаем атрибут ссылку
                document.querySelector(link).scrollIntoView({ //на полученной ссылке применяем метод scroll
                    block: 'start',
                    behavior: 'smooth'
                });
            }
        });
        // Плавная прокрутка при нажатии на стрелку
        const main = document.querySelector('main');//получим main
        main.addEventListener('click', event => {
            const target = event.target;

            if (target.closest('a>img')) { //выбираем сслыку-картинку
                event.preventDefault();
                //по аналогии с со ссылками
                const link = target.closest('a').getAttribute('href');
                document.querySelector(link).scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            }
        });
    };
    scrolling();

};

export default toggleMenu;