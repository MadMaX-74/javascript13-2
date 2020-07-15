// eslint-disable-next-line strict
'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elmentClosest from 'element-closest';
elmentClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'mdn-polyfills/Node.prototype.append';

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
countTimer('03 July 2020');

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