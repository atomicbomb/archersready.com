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

var swipeOptions =
{
	swipe:createSwipe,
	threshold:50
}

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
	
	$(".eventSelectArchers .archer").swipe( swipeOptions );
		
	//$(".swipe-delete").click(function(e) {
	$(".archer-list").on("click", ".archer .swipe-delete", function(e) {
		e.preventDefault();
		var $archer = $(this).parent(".archer");
		$archer.addClass("archer-delete");
		$archer.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
			$archer.remove();
		})
		
	});
	
	$("#addArcher").click(function(e) {
		e.preventDefault();
		// TODO: Replace with AJAX call
		
		var archerNum = $(".archer").length;
		
		var html =  "<div class=\"list-group-item archer\">";
			html += "    <h4 class=\"list-group-item-heading pull-left\">" + archerNum + ": " + $("#archerName").val() + "</h4>";
			html += "    <span class=\"glyphicon glyphicon-th pull-right\" style=\"cursor:pointer;\"></span>";
			html += "    <button class=\"swipe-delete\">Delete</button>";
			html += "</div>";
		
		$(html).insertBefore(".archer-add");
		$("#archerName").val("");
		$(".eventSelectArchers").swipe( swipeOptions );
	});
	
	$("#start").click(function(e) {
		e.preventDefault();
		window.location = "score-end.htm";
	});

});

function createSwipe(event, direction) {

	switch (direction) {
		case "left":
			$(".swipe-delete").removeClass("show");
			$(event.toElement).find(".swipe-delete").toggleClass("show");
			break;
		default:
			//Nothing
			break;
	}
}