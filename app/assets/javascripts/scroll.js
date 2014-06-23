$(document).ready(function($) {
	$("#overview").click(function() {
		$('html, body').animate({
	        scrollTop: $("#who-we-are").offset().top -100 
	    }, 1000);
		event.preventDefault();
	});
	$("#river-deep-section").click(function() {
		$('html, body').animate({
	        scrollTop: $("#river-deep").offset().top -100 
	    }, 1000);
		event.preventDefault();
	});
	$("#fishery-section").click(function() {
		$('html, body').animate({
	        scrollTop: $("#fishery").offset().top -10
	    }, 1000);
		event.preventDefault();
	});
	$("#donate-link").click(function() {
		$('html, body').animate({
	        scrollTop: $("#donate").offset().top -10
	    }, 1000);
		event.preventDefault();
	});
	$("#overview-tab").click(function() {
		event.preventDefault();
	});
});