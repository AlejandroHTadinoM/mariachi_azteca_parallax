var windowHeight = $(window).height();
var bannerHeight = $('.banner').height();
var brandHeight = $('.brand').height();
var navPos = $('.nav-bar').offset().top;

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll <= (bannerHeight - $('.nav-bar').height())) {

        $('.cta-container').css({
            'transform': 'translate(0px, ' + (wScroll / 4) + '%)'
        });

    };

    $('nav').wrap('<div class="nav-wrapper"></div>');

    $('.nav-wrapper').height($('nav').height());

    if (wScroll >= navPos) {
        $('.nav-bar').addClass('stk');
        $('.nav-bar').css({
            'background': 'linear-gradient(90deg, $flag-green 33.33%, white 33.33%, white 66.66%, $flag-red 66.66%, $flag-red)'
        });
    } else {
        $('.nav-bar').removeClass('stk');
        $('.nav-bar').css({
            'background': 'transparent'
        });
    };

});