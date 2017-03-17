//Possitions
var navPos = $('.nav-bar').offset().top;
var servicePos = $('.service').offset().top;

//Dimentions
var windowHeight = $(window).height();
var bannerHeight = $('.banner').height();
var brandHeight = $('.brand').height();

//Items
var $navbarItem = $('nav').find('li');
$('nav').wrap('<div class="nav-wrapper"></div>');
/*

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll >= servicePos) {
        $navbarItem.animate({
            top : '5px'
        });
    } else {
        $navbarItem.animate({
            borderBottomWidth : '0'
        });
    }
});

*/
$(window).scroll(function () {
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