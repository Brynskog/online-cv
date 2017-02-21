$(function () {
	$(document).on('click', '.js-mobile-menu__trigger', function () {
		$('.js-main-nav__list').toggleClass('open', 'blind');
	});

	$(document).on('click', '.js-main-nav__list li', function () {
		if ($(window).width() <= 768) {
			$('.js-main-nav__list').toggleClass('open', 'blind');
		}
	});
});
