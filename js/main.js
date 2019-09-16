$(document).ready(function () {
	if ($('.js-portfolio-gallery').length) {
		$('.js-portfolio-gallery').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			rtl: true
		});
	}

	if ($('.js-review-slider').length) {
		$('.js-review-slider').slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			rtl: true,
			responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1101,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			},
			]
		});
	}
});