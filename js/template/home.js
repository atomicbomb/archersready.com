$(function() {
	$(".score-end").click(function() {
		window.location = "event-archers.htm?eventid=" + $(this).data("score-id");
	});
});
