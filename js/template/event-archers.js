$(function() {

	$("#archerList li").click(function() {
		var $this = $(this);
		window.location = "score-end.htm?eventID=" + $("#archerList").data("event-id") + "&archerID=" + $this.data("archer-id");
	});
	
});
