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