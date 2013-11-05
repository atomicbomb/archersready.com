var $scorepadContainer = $("#scorepadContainer");
var $scoreCard = $(".scorecard");

$(function() {
	
	$(".scoresheet tr").click(function() {
	
		var $scoresheet = $(this);
		var numSet = $scoresheet.closest("table").data("set");
		var numEnd = parseInt($scoresheet.children("td:first").text());
		console.log("Set: " + numSet + "\r\nEnd: " + numEnd);
		
		$scorepadContainer.css("bottom", "0");
		$scoreCard.css("margin-bottom", "172px");
		location.hash = "#set" + numSet;
		console.log("change to a scrollTo so we can get the positioning right (account for 70px header)");

	});
	
	$("#buttonBack").click(function() {
		console.log("TODO: Delete shots from currently selected end.");
	});
	$("#buttonCamera").click(function() {
		console.log("TODO: camera available? get photo");
	});
	$("#buttonDone").click(function() {
		$scoreCard.css("margin-bottom", "0");
		$scorepadContainer.css("bottom", "-157px");
	});
});
