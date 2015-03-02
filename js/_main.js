// Off Canvas Sliding

$(document).ready(function(){
	$('.js-menu-trigger').on('click touchstart', function(e){
		$('body').toggleClass('no-scroll');
		$('.js-menu, .js-menu-screen').toggleClass('is-visible');
		$('.sliding-menu-button').toggleClass('slide close');
		$('#masthead, #page-wrapper').toggleClass('slide');
		e.preventDefault();
	});
	$('.js-menu-screen').on('click touchstart', function(e){
		$('body').toggleClass('no-scroll');
		$('.js-menu, .js-menu-screen').toggleClass('is-visible');
		$('.sliding-menu-button').toggleClass('slide close');
		$('#masthead, #page-wrapper').toggleClass('slide');
		e.preventDefault();
	});
});

// FitVids
$(document).ready(function(){
	// Target your .container, .wrapper, .post, etc.
	$("#main").fitVids();
});

// Verbatim
$(document).verbatim({
 animated: true,
 animationSpeed: 2000,
 highlightParent: false,
 highlightColor: 'rgb(134, 21, 210)',
 bitlyToken: '417c7776b4faf0c1e927d1da2545a2e246402f94'
});
