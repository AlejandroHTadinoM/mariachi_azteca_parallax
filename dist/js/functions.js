var windowHeight = $(window).height();
var hContainerHeight = $('.banner-box').height();
var brandHeight = $('.brand').height();

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll >= windowHeight) {
        $('.brand').css({
            'height': ( brandHeight / 2 )
        });
        
        $('nav').css({
            'background': 'rgba(0, 0, 0, .6)'
        })

    } else {
        $('.brand').css({
            'height': ( brandHeight )
        });

        $('nav').css({
            'background': 'transparent'
        })
    }

    if (wScroll <= hContainerHeight ) {
        $('.page-title').css({
            'transform': 'translate(0px, ' +  (wScroll / 2) + '%)'
        });

        $('.banner-box').css({
            'background-position': '0% ' + (wScroll / 8) + '%'
        });
    }
});