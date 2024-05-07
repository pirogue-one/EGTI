'use strict';

const swiper = new Swiper('.hero-swiper', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
        enabled: true,
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
    }
  });