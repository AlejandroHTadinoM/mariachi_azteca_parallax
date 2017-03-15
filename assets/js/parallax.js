var windowHeight = $(window).height();
var bannerHeight = $('.banner').height();
var brandHeight = $('.brand').height();
var navPos = $('.nav-bar').offset().top;

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    
    if (wScroll <= bannerHeight) {

        $('.cta-container').css({

            'transform': 'translate(0px, ' + (wScroll / 4) + '%)'

        });

    };

    if (wScroll >= navPos) {

        $('.nav-bar').addClass('sticky');

    } else {

        $('.nav-bar').removeClass('sticky');

    };

    
});