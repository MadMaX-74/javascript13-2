/* eslint-disable no-inner-declarations */
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

export default togglePopUp;