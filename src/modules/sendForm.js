const sendForm = () => {
    const errorMessage = 'что-то пошло не так',
        loadMessage = '<img src="./images/745.svg">',
        seuccessMessage = 'Спасибо! Мы скоро свяжемся с вами';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    statusMessage.style.cssText = 'color: #fff';

    const phoneForm = document.querySelectorAll('.form-phone');
    phoneForm.forEach(elem => {
        elem.addEventListener('input', e => {
            if (e.target.matches('input')) {
                e.target.value = e.target.value.replace(/[^0-9+]/, '');
            }
        });
    });
    const message = document.querySelectorAll('.mess');
    message.forEach(elem => {
        elem.addEventListener('input', e => {
            if (e.target.matches('input')) {
                e.target.value = e.target.value.replace(/[^а-я\s]/iu, '');
            }
        });
    });
    const nameForm = document.querySelectorAll('.form-name');
    nameForm.forEach(elem => {
        elem.addEventListener('input', e => {
            if (e.target.matches('input')) {
                e.target.value = e.target.value.replace(/[^а-яё\s]/gi, '');
            }
        });
    });
    const secondNameForm = document.querySelectorAll('#form2-name');
    secondNameForm.forEach(elem => {
        elem.addEventListener('input', e => {
            if (e.target.matches('input')) {
                e.target.value = e.target.value.replace(/[^а-я\s]/iu, '');
            }
        });
    });

    const form = document.querySelectorAll('form');
    form.forEach(elem => {
        elem.addEventListener('submit', event => {
            event.preventDefault();
            elem.appendChild(statusMessage);
            statusMessage.innerHTML = loadMessage;

            const formData = new FormData(elem);

            const outputData = () => {
                statusMessage.textContent = seuccessMessage;
                const formInput = document.querySelectorAll('input');
                formInput.forEach(elem => { elem.value = ''; });
            };
            const errorData = error => {
                statusMessage.textContent = errorMessage;
                console.error(error);
                const formInput = document.querySelectorAll('input');
                formInput.forEach(elem => { elem.value = ''; });
            };
            // eslint-disable-next-line no-use-before-define
            postData(formData)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    outputData();
                })
                .catch(errorData);
        });
    });
    const postData = formData =>
        fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        })


    /* //AJAX
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    resolve();
                } else {
                    reject(request.status);
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');

            request.send(JSON.stringify(body));
        }); */
    ;

};

export default sendForm;
