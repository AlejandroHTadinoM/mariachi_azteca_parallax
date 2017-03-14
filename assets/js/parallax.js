var windowHeight = $(window).height();
var hContainerHeight = $('.banner').height();
var brandHeight = $('.brand').height();

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    $('.cta-container').css({
        'transform': 'translate(0px, ' + (wScroll / 4) + '%)'
    });
});