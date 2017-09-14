$(function () {
    // Header PopUp
    $('.navbar-toggle').on('click', function() {
        $('.navbar-collapse').slideToggle();
    });

    // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 45) {
            $('#navbar').css({
                'padding-left' : '15px',
                'padding-right' : '15px'
            });
            $('.header__content').css('margin-top', 240);
            $('#navbar-fixed-top').addClass('navbar-fixed-top');
            $('.header__top--wrap').addClass('fixed');
        } else {
            $('.header__content').css('margin-top', 207);
            $('#navbar-fixed-top').removeClass('navbar-fixed-top');
            $('.header__top--wrap').removeClass('fixed');
        }
    });

    //Swiper Slider
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 0,
        grabCursor: true
    });
});


