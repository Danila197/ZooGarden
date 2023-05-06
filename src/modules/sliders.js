import { Swiper, Pagination, Autoplay } from "swiper";

const params = {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    modules: [Autoplay, Pagination]
};

export const slidersInit = (selectorSlider, newParams) => {
    new Swiper(selectorSlider, {
        ...params,
        ...newParams
    })
};

