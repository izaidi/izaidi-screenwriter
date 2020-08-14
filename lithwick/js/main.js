function fadeUp() {

	header = $('.header');
	headerText = $('.header-text');
	logo = $('.header-logo');
	content = $('.content');

	headerHeight = header.height();
	var windowHeight = $(window).height();

	headerText.hide();

	header.css({
		height: windowHeight+'px',
		opacity: 1
	});

	logo.addClass('loading');

	logo.css({
		top: (windowHeight/2 - 100) + 'px'
	});

	content.css({
		marginTop: headerHeight+'px'
	});

	logo.animate({
		opacity: 1
	}, 300, function() {
		$('#logoWhiteL').animate({
			opacity: 1
		}, 300, function() {
			$('#logoBlackL').animate({
				opacity: 1
			}, 300, function() {
				$('body').addClass('loaded');
				header.animate({
					height: headerHeight+'px'
				}, 500);
				logo.animate({
					top: '30px'
				}, 500, function() {
					showContent();
				});
				headerText.delay(300).fadeIn(500);
			});
		});
	});

}

function showContent() {
	content.fadeIn(300);

	initLogoHeight = logo.height();
	initLogoTop = parseInt(logo.css('top'));

	setScrolling();
}


function setScrolling() {

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();

		var buttonHeight = 80;

		var pctScrolled = scrollTop / (headerHeight - buttonHeight);

		if (pctScrolled > 1) pctScrolled = 1;
		if (pctScrolled < 0) pctScrolled = 0;

		headerText.css({
			opacity: 1 - pctScrolled,
			top: -(scrollTop/2)+'px'
		});

		var logoSize = initLogoHeight - (pctScrolled * (initLogoHeight - buttonHeight));
		var logoLeft = 50 + (pctScrolled*50);
		var logoTop = initLogoTop - (pctScrolled*initLogoTop);
		var logoTranslate = 50 + (pctScrolled*50);

		logo.css({
			left: logoLeft+'%',
			top: logoTop+'px',
			transform: 'translateX(-'+logoTranslate+'%)',
			width: logoSize+'px',
			height: logoSize+'px'
		});

		var newHeaderHeight = headerHeight - (pctScrolled * (headerHeight - buttonHeight));

		header.css({
			height: newHeaderHeight+'px'
		});

		$('.header-bg').css({
			opacity: 1 - Math.pow(pctScrolled, 3)
		});
	});

}


$(document).ready(function() {

	$(window).scrollTop(0);
	fadeUp();

	$('.expand-bio').click(function() {
		$(this).hide();
		$('.additional-bio').show();
	});
});