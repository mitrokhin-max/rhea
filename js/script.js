$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ],
    });

    /*$('.slider-big').slick({
        fade: true,
        asNavFor: ".slider-sm",
        arrows: false,
    });
    $('.slider-sm').slick({
        focusOnSelect: true,
        vertical: true,
        slidesToShow: 3,
        arrows: false,
        infinite: true,
        asNavFor: ".slider-big",
    });*/

    var thumbsSwiper = new Swiper('.slider-sm', {
        slidesPerView: 2,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        mousewheel: true,
        grabCursor: true,
        //autoHeight: true,
        spaceBetween: 10,

        direction: 'horizontal',

        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 3,
                direction: 'vertical',
            },
        }
    });
    
    var mySwiper = new Swiper('.slider-big', {
        direction: 'horizontal',
        effect: 'fade',
        thumbs: {
            swiper: thumbsSwiper
        },
        breakpoints: {
            767: {
                direction: 'vertical',
            },
        }
    });

    var categories = new Swiper('.categories__slider', {
        slidesPerView: 1,
        spaceBetween: 2,
        centeredSlidesBounds: false, //убирает пробелы вначале и вконце, можно иначе:вкл. луп
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            576: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 20,
            },
        }
    });

var textSlider = new Swiper('.text-slider', {
    watchSlidesProgress: true, // с помощью этого реализовал связанность
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    //autoHeight: true,
});

var personSlider = new Swiper('.person-slider', {
    thumbs: {
        swiper: textSlider,
    },
    navigation: {
            nextEl: '.person-slider__arrow_r',
            prevEl: '.person-slider__arrow_l',
        },
    pagination: {
            el: '.person-slider__pagination',
            type: 'bullets',
            clickable: true,
        },
});

$('.footer__plus').click(function(event){
    $(this).toggleClass('active').next().slideToggle(300);
});
})