var hContainerHeight = $('.banner-box').height();

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll <= hContainerHeight ) {
        $('.page-title').css({
            'transform': 'translate(0px, ' +  (wScroll * 1.2) + '%)'
        });
    }
});