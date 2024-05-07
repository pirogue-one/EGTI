'use strict';

const swiper = new Swiper('.hero-swiper', {
    speed: 400,
    spaceBetween: 200,
    direction: 'horizontal',
    allowTouchMove: true,
    navigation: {
        enabled: true,
        nextEl: '.hero-button-next',
        prevEl: '.hero-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
const swiperAnnouncement = new Swiper('#swiper-announcement', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        enabled: true,
        nextEl: '#ann-button-next',
        prevEl: '#ann-button-prev'
    }
}); 