var windowHeight = $(window).height();
var bannerHeight = $('.banner').height();
var brandHeight = $('.brand').height();
var navPos = $('.nav-bar').offset().top;

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    if (wScroll <= (bannerHeight - $('.nav-bar').height())) {

        $('.cta-container').css({
            'transform': 'translate(0px, ' + (wScroll / 4) + '%)'
        });

    };

    $('.nav-bar').wraper('<div class="nav-wrapper"></div>');

    if (wScroll >= navPos - 200) {

        $('.nav-bar').css({
            'position': 'fixed',
            'margin': 'auto'
        })
    } else {
        $('.nav-bar').css({
            'position': 'relative'
        })
    };

    
});