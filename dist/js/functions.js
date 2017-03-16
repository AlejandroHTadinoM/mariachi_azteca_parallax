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

$(window).scroll(function () {

    var windowHeight = $(window).height();
    var bannerHeight = $('.banner').height();
    var brandHeight = $('.brand').height();
    var wScroll = $(this).scrollTop();

    if (wScroll <= bannerHeight) {
        $('.cta-container').css({
            'transform': 'translate(0px, ' + (wScroll / 4) + '%)'
        });
    };

    $('nav').wrap('<div class="nav-wrapper"></div>');
    $('.nav-wrapper').height($('nav').height());

    if (wScroll > navPos) {
        $('.nav-bar').addClass('stk');
        $('.nav-bar').css({
            'background': 'linear-gradient(90deg, #CE1126 33.33%, #FFFFFF 33.33%, #FFFFFF 66.66%, #006847 66.66%, #006847)'
        });
    } else {
        $('.nav-bar').removeClass('stk');
        $('.nav-bar').css({
            'background': 'transparent'
        });
    }

});