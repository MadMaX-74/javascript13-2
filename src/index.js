// eslint-disable-next-line strict
'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import checkInputCalc from './modules/checkInputCalc';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//timer
countTimer('19 July 2020');

//menu
toggleMenu();

//popup
togglePopUp();

//tabs
tabs();

//slider
slider();


//photo
changePhoto();


//Ограничение ввода в калькулятор
checkInputCalc();


// calc
calc(100);

//send ajax-form
sendForm();