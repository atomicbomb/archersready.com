$(function() {
	$("[data-toggle=offcanvas]").click(function() {
		$(".row-offcanvas").toggleClass("active");
	});
	$("#buttonAddEvent").click(function() {
		window.location = "choose-event-type.htm";
	});				
});
