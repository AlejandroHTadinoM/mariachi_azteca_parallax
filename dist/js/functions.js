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
var footer = $('footer');
var footerItems = footer.find('a');
var galleryImg = $('.gallery-thbm');
var galleryView = $('#img-view');
var sectionGallery = $('.gallery');
galleryImg.click(function () {
	var imgPath = $(this).attr('src');
	console.log(imgPath);
	galleryView.fadeOut(500, function () {
		$(this).attr('src', imgPath);
		sectionGallery.css({
			'background' : 'linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(' + imgPath + ')',
			'background-repeat': 'no-repeat',
			'background-size' : 'cover',
			'background-position' : 'center'
		})

	}).fadeIn(500);
});
$('.nav-item a').on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
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