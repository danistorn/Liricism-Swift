// JavaScript Document

$.fn.tooltip = function(){
	$(this).append('<span class=\"tooltip_text\"></span>')
	$(this).hover(funstion() {
		$(this).children('.tooltip_text').css({"opacity":"1"});
	thisText = $(this).attr('title');
	$(this).removeAttr('title');
	$(this).children('.tooltip_text').text('some text')
	}, function() {
		
	});

$('.').tooltip()

