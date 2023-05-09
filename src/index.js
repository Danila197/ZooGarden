import './index.html';
// new modules

import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';
import { videoBGInit } from './modules/videoBG';
import { menuControl } from './modules/menuControl';

// use modules
videoBGInit();
menuControl();

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
    }
});

slidersInit('.career__slider', {
    pagination: {
        el: '.career__slider-pagination',
    },
    breakpoints: {
        576: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            pagination: true
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 26,
            pagination: false
        },
        1240: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: false
        }
    }
});
