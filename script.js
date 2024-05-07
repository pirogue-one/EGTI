'use strict';

const swiper = new Swiper('.hero-swiper', {
    speed: 400,
    spaceBetween: 100,
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

  const swiperAnnouncement = new Swiper('.swiper-announcement', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 20,
    
      // Navigation arrows
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });  