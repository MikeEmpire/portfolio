/* eslint-disable */
$(document).ready(function() {

	setTimeout(function() {
		$('body').addClass('loaded');
		$('h1').css('color', '#FFF');
	});
	// 	var mySplitText = new SplitText("#quote", {type: "lines"}),
	// 		tl = new TimelineLite();
	//
	// 	tl.staggerFrom(mySplitText.lines, 1.6, {
	// 		opacity: 0,
	// 		cycle: {
	// 			x: [100, -100]
	// 		}
	// 	}, 2.5)
	// }, 1000);
});

$(function() {
	var scrollMagicController = new ScrollMagic.Controller();
	var tween = new TimelineMax()
	tween.to('#bio' , 1, { opacity: .5, x:-100 , ease:Back.easeInOut })
  		 .to('#bio' , 1, { color: 'white', opacity:1, x: 0, ease:Power1.easeInOut });
	// Before beautifying copy this section of code
	var scene = new ScrollMagic.Scene({
		triggerElement: '#section-works',
		duration: 200,
		offset: 150
		})
		.setTween(tween)
		.addIndicators({name: "loop"})
		.addTo(scrollMagicController);
});
