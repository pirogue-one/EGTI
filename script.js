'use strict';

const swiper = new Swiper('.hero-swiper', {
    speed: 400,
    spaceBetween: 200,
    direction: 'horizontal',
    allowTouchMove: true,
    autoplay: {
        delay: 3200,
    },
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
    spaceBetween: 10,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        // when window width is >= 320px
        1140: {
            slidesPerView: 'auto',
            spaceBetween: 10
        },
        570: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        359: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    },

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
    spaceBetween: 10,
    autoplay: {
        delay: 3200,
    },
    breakpoints: {
        // when window width is >= 320px
        1140: {
            slidesPerView: 'auto',
            spaceBetween: 10
        },
        570: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        359: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    },

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
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        // when window width is >= 320px
        1140: {
            slidesPerView: 'auto',
            spaceBetween: 10
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 10
        },
    },

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
    autoplay: {
        delay: 3200,
    },

    // Navigation arrows
    navigation: {
        enabled: true,
        nextEl: '#partners-button-next',
        prevEl: '#partners-button-prev'
    }
});

//menu - hamburger

const closeBtn = document.querySelector('#close');
const modalMenu = document.querySelector('.modal_menu');
const mobMenu = document.querySelector('#menu');

mobMenu.addEventListener('click', () => {
    modalMenu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modalMenu.style.display = 'none';
})