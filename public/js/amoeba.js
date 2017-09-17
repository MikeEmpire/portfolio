/* eslint-disable */
(function($) {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

	// local scroll
	jQuery('.navbar').localScroll({
		hash: true,
		offset: {
			top: 0
		},
		duration: 800,
		easing: 'easeInOutExpo'
	});

	// fancybox
	jQuery(".fancybox").fancybox();

	if (Modernizr.mq("screen and (max-width:1024px)")) {
		jQuery("body").toggleClass("body");

	} else {
		var s = skrollr.init({
			mobileDeceleration: 1,
			edgeStrategy: 'set',
			forceHeight: true,
			smoothScrolling: true,
			smoothScrollingDuration: 300,
			easing: {
				WTF: Math.random,
				inverted: function(p) {
					return 1 - p;
				}
			}
		});
	}

	//scroll menu
	jQuery('.appear').appear();
	jQuery(".appear").on("appear", function(data) {
		var id = $(this).attr("id");
		jQuery('.nav li').removeClass('active');
		jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
	});

	//parallax
	var isMobile = false;

	if (Modernizr.mq('only all and (max-width: 1024px)')) {
		isMobile = true;
	}

	if (isMobile == false && ($('#parallax1').length || isMobile == false && $('#parallax2').length || isMobile == false && $('#testimonials').length || isMobile == false && $('#section-works').length)) {

		$(window).stellar({
			responsive: true,
			scrollProperty: 'scroll',
			parallaxElements: false,
			horizontalScrolling: false,
			horizontalOffset: 0,
			verticalOffset: 0
		});

	}

})(jQuery);
