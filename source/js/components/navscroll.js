$(function () {
	$(document).on('click', '.main-nav__list li', function () {
		var classname = $(this).find('a').attr('class');

		switch (classname) {
			case 'js-bio__trigger':
				$('html,body').animate({
					scrollTop: $('.js-bio').offset().top - 173
				}, 800);
				break;
			case 'js-work-exp__trigger':
				$('html,body').animate({
					scrollTop: $('.js-work-exp').offset().top - 173
				}, 800);
				break;
			case 'js-education__trigger':
				$('html,body').animate({
					scrollTop: $('.js-education').offset().top - 173
				}, 800);
				break;
			case 'js-online__trigger':
				$('html,body').animate({
					scrollTop: $('.js-online').offset().top - 173
				}, 800);
				break;
			case 'js-skills__trigger':
				$('html,body').animate({
					scrollTop: $('.js-skills').offset().top - 173
				}, 800);
				break;
			case 'js-contact__trigger':
				$('html,body').animate({
					scrollTop: $('.js-contact').offset().top - 173
				}, 800);
				break;
		}
	});
});

