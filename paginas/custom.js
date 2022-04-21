// JavaScript Document

$.fn.tooltip = function(){
	$(this).append('<span class=\"tooltip_text\"></span>')
	$(this).hover(function() {
		$(this).children('.tooltip_text').css({"opacity":"1"});
		thisText = $(this).attr('title');
		$(this).removeAttr('title');
		$(this).children('.tooltip_text').text('some text')
	}, function() {
		$(this).attr('title', thisText);
		$(this).children('.tooltip_text').text("");
		$(this).children('.tooltip_text').css({"opacity":"0"});
	});
}

$('.tooltip_hover').tooltip();

