const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    spaceBetween: 20,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1.3,
        },
        590: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 2.3,
        },
        1040: {
            slidesPerView: 3,
        },
    },
});


$(document).ready(() => {
    $('.nav-opener').on('click', function () {
        if ($('.header').hasClass('active')) {
            $('.header').removeClass('active');
        } else {
            $('.header').addClass('active');
        }
    });
});