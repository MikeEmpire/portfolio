/* eslint-disable */
$(document).ready(function() {

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
});

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
