var $buttonBack = $(".buttonBack");
var $container = $("#pageContainer");
var $navTitle = $("#navTitle");

var $eventType = $(".eventType");
var $eventTypeTemplates = $(".eventTypeTemplates");
var $eventTemplateDetails = $(".eventTemplateDetails");
var $eventSelectArchers = $(".eventSelectArchers");

var $templateHeader = $("#templateHeader");
var $selectArchers = $("#selectArchers");
var textPreviousTitle = [];

var archers = $(".eventSelectArchers .archer");

$(function() {

	$buttonBack.click(function(e) {
		e.preventDefault();
		switch ($("#navTitle").text()) {
			case "New Event":
				window.location = "home.htm";
				break;
			case "Archery Australia":
				$container.removeClass("showEventType");
				$navTitle.text(textPreviousTitle.pop());
				break;
			case "Select Archers":
				$container.removeClass("showSelectArchers");
				$navTitle.text(textPreviousTitle.pop());
				break;
			default:
				$container.removeClass("showTemplateDetail");
				$navTitle.text(textPreviousTitle.pop());
				break;
		}
	});
	
	$(".eventType a").click(function(e) {
		e.preventDefault();
		var $this = $(this);
		
		if ($(this).data("templates") == true) {
			// this option has sub-templates to choose.
			$eventTypeTemplates.show(0, function() {
				$container.addClass("showEventType");
			});
		} else {
			// go straight to the event detail page.
			$eventTypeTemplates.hide(0, function() {
				$container.addClass("showTemplateDetail");
				$templateHeader.find("h4").text($this.find("h4").text());
				$templateHeader.find("p").text($this.find("p").text());
			});
		}
		textPreviousTitle.push($navTitle.text().trim());
		$navTitle.text($(this).find("h4").text().trim());
	});
	
	$(".eventTypeTemplates .list-group a").click(function(e) {
		e.preventDefault();
		var $this = $(this);
	
		textPreviousTitle.push($navTitle.text().trim());
		$navTitle.text($this.find("h4").text());
	
		$container.addClass("showTemplateDetail");
		$templateHeader.find("h4").text($this.find("h4").text());
		$templateHeader.find("p").text($this.find("p").text());
	});
	
	$selectArchers.click(function(e) {
	
		e.preventDefault();
		$container.addClass("showSelectArchers");
		textPreviousTitle.push($navTitle.text().trim());
		$navTitle.text("Select Archers");
	
		archers.on("swipeleft", function(e) {
			alert($(this).html());
		});
		
	});
	
	$('.eventSelectArchers').on("movestart", function(e) {
		// If the movestart is heading off in an upwards or downwards
		// direction, prevent it so that the browser scrolls normally.
		if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
			e.preventDefault();
		}
	});
	
	$("#start").click(function(e) {
		e.preventDefault();
		window.location = "score-end.htm";
	});

});

/*function setBackButtonIcon() {

if ($navTitle.text() == "New Event") {
	$buttonBack.find("span").removeClass("glyphicon-chevron-left").addClass("glyphicon-home");
} else {
	$buttonBack.find("span").removeClass("glyphicon-home").addClass("glyphicon-chevron-left");						
}

}*/