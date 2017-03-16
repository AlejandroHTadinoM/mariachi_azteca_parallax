/*$(document).ready(function () {

    console.log("banner");

    var bg_img = [

        "/img/banner-1.jpg",
        "/img/banner-2.jpg",
        "/img/banner-1.jpg",
        "/img/banner-1.jpg",
        "/img/banner-1.jpg", 
        "/img/banner-1.jpg",
        "/img/banner-1.jpg",
        "/img/banner-1.jpg"

    ];

    for (i = 0; i <= bg_img.lenght(); i++) {

        $('.banner').css({

            'background': 'linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .3)), ' + bg_img[i]

        });

    };

});*/
var navPos = $('.nav-bar').offset().top;
$('nav').wrap('<div class="nav-wrapper"></div>');

$(window).scroll(function () {

    var windowHeight = $(window).height();
    var bannerHeight = $('.banner').height();
    var brandHeight = $('.brand').height();
    var wScroll = $(this).scrollTop();

    $('.nav-wrapper').height($('nav').height());

    if (wScroll <= bannerHeight) {
        $('.cta-container').css({
            'transform': 'translate(0px, ' + (wScroll / 4) + '%)'
        });
        $('.banner').css({
            'background-position': 'center ' + (wScroll / 12) + '%' 
        });
    };

    if (wScroll > navPos) {
        $('.nav-bar').addClass('stk');
    } else {
        $('.nav-bar').removeClass('stk');
    }

});