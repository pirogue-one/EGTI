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

const swiperNews = new Swiper('#swiper-news', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        enabled: true,
        nextEl: '#news-button-next',
        prevEl: '#news-button-prev'
    }
}); 

const swiperGraduates = new Swiper('#swiper-graduates', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        enabled: true,
        nextEl: '#grad-button-next',
        prevEl: '#grad-button-prev'
    }
}); 

const swiperPartners = new Swiper('#swiper-partners', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        enabled: true,
        nextEl: '#partners-button-next',
        prevEl: '#partners-button-prev'
    }
}); 