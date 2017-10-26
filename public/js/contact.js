/* eslint-disable */

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

var name,
	email,
	subject,
	text;
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
