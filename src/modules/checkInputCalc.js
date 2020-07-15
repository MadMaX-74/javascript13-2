const checkInputCalc = () => {
    const calcItemBlock = document.querySelector('.calc-block');

    calcItemBlock.addEventListener('input', e => {
        if (e.target.matches('input')) {
            e.target.value = e.target.value.replace(/\D/g, '');//Не вводит все нечисла
        }
    });
};

export default checkInputCalc;
