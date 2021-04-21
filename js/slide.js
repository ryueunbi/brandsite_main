$(document).ready(function(){
	$('.slick-items').slick({
		autoplay : true,
		dots: true,
		speed : 500,
		infinite: true,
		autoplaySpeed: 5000,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true
	});
    $('.slick-arrow').hide();
    $('.slick-dots').hide();
});

$('.slick-list').slick({
	autoplay : true,
	dots: true,
	infinite: true,
	speed: 350,
	slidesToShow: 1,
	centerMode: true,
	variableWidth: true
});