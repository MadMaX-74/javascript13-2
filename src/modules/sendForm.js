const sendForm = () => {
    const errorMessage = 'что-то пошло не так',
        loadMessage = '<img src="./images/745.svg">',
        seuccessMessage = 'Спасибо! Мы скоро свяжемся с вами';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    statusMessage.style.cssText = 'color: #fff';


    document.addEventListener('input', event => {
        const target = event.target,
            inputText = target.closest('input[name="user_name"], input[name="user_message"]'),
            inputPhone = target.closest('input[name="user_phone"]');

        if (inputText) {
            inputText.value = inputText.value.replace(/[^а-яё\s]/gi, '');
        }

        if (inputPhone) {
            inputPhone.value = inputPhone.value.replace(/^[^+\d]*(\+|\d)|\D/g, '$1');
        }
    });



    const form = document.querySelectorAll('form');
    form.forEach(elem => {
        elem.addEventListener('submit', event => {
            event.preventDefault();

            const phone = elem.querySelector('.form-phone');
            if (phone.value.length < 5) {
                alert('Номер телефона введен не правильно');
            } else if (phone.value.length > 12) {
                alert('Номер телефона введен не правильно');
            } else {
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
            }


        });
    });
    const postData = formData =>
        fetch('./server.php', {
            method: 'POST',
            origin: 'http://localhost:80',
            headers: {
                'Content-Type': 'form/multipart'
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
