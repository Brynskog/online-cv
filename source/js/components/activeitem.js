$(function () {
	$(document).on('click', '.js-main-nav__list li', function () {
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
	});
});
