import './index.html';
import './page.html';
// new modules

import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';
import { videoBGInit } from './modules/videoBG';
import { menuControl } from './modules/menuControl';
import { locationHover } from './modules/locationHover';

// use modules
videoBGInit();
menuControl();
locationHover();

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
    }
});

const careerImageItems = document.querySelectorAll('.career__image-item');

careerImageItems.forEach((item, i) => {
    item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`)
})

slidersInit('.career__slider', {
    pagination: {
        el: '.career__slider-pagination',
    },
    breakpoints: {
        576: {
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
