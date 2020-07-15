const changePhoto = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');
    commandPhoto.forEach(elem => {
        elem.addEventListener('mouseover', event => {
            event.target.src = event.target.dataset.img;
        });
    });

    // Туст сделаем масив с прежникми картинками
    const arrSrc = [];
    commandPhoto.forEach(item => {
        arrSrc.push(item.src);
    });

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

export default changePhoto;