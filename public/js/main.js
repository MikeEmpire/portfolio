/* eslint-disable */
$(document).ready(function() {

	var TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtType.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

		var that = this;
		var delta = 200 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function() {
			that.tick();
		}, delta);
	};

	window.onload = function() {
		var elements = document.getElementsByClassName('typewrite');
		for (var i = 0; i < elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
		document.body.appendChild(css);
	};

	setTimeout(function() {
		$('body').addClass('loaded');
		$('h1').css('color', '#FFF');
	});

	$('#contactForm').bootstrapValidator({
		container: '#messages',
		feedbackIcons: {
			valid: ' fa fa-check-circle',
			invalid: 'fa fa-times',
			validating: 'fa fa-circle-o'
		},
		fields: {
			name: {
				validators: {
					notEmpty: {
						message: 'The full name is required and cannot be empty'
					}
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: 'The email address is required and cannot be empty'
					},
					emailAddress: {
						message: 'The email address is not valid'
					}
				}
			},
			subject: {
				validators: {
					notEmpty: {
						message: 'The title is required and cannot be empty'
					},
					stringLength: {
						max: 100,
						message: 'The title must be less than 100 characters long'
					}
				}
			},
			content: {
				validators: {
					notEmpty: {
						message: 'The content is required and cannot be empty'
					},
					stringLength: {
						max: 500,
						message: 'The content must be less than 500 characters long'
					}
				}
			}
		}
	});

	var name, email, subject, text;
	$("#send_email").click(function() {
		name = $("#name").val();
		email = $("#email").val();
		subject = $("#subject").val();
		text = $("#message").val();
		$("#message").text("Sending E-mail...Please wait");
		$.get("http://localhost:3000/send", {
			name: name,
			email: email,
			subject: subject,
			text: text
		}, function(data) {
			if (data == "sent") {
				$("#message").empty().html("Email is been sent at " + to + ".Please check inbox!");
				}
			});
	});

});

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

$(function() {
	var scrollMagicController = new ScrollMagic.Controller();
	var tween = new TimelineMax()
	tween.to('#bio', 1, {
		opacity: .5,
		x: -100,
		ease: Back.easeInOut
	}).to('#bio', 1, {
		color: 'white',
		opacity: 1,
		x: 0,
		ease: Power1.easeInOut
	}).to('#contact-text', 2, {
		color: 'gold',
		fontSize: 19,
		ease: Power1.easeInOutExpo
	});
	// Before beautifying copy this section of code
	var scene = new ScrollMagic.Scene({
		triggerElement: '#section-works',
		duration: 200,
		offset: 50
	})
	.setTween(tween)
	// .addIndicators({name: "loop"})
	.addTo(scrollMagicController);
});
