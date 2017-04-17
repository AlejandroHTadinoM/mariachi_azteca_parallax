$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $('.nav-wrapper').height($('nav').height());
    if (wScroll <= bannerHeight) {
        $('.cta-container').css({
            'transform': 'translate(0px, ' + (wScroll / 3) + '%)'
        });
        $('.banner').css({
            'background-position': 'center ' + (wScroll / 6) + '%' 
        });
    };
    if (wScroll > navPos) {
        $('.nav-bar').addClass('stk');
    } else {
        $('.nav-bar').removeClass('stk');
    }
});