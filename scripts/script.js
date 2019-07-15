/--- contact --/
function addListener(element, eventName, handler) {
	if (element.addEventListener) {
		element.addEventListener(eventName, handler, false);
	}
	else if (element.attachEvent) {
		element.attachEvent('on' + eventName, handler);
	}
	else {
		element['on' + eventName] = handler;
	}
}

addListener(
	document.getElementById('contact-info'),
	'click', function(){
	window.open('mailto:mail@kree8tive.dk?subject=Hi there ...&body=Hello%0A%0AI want to talk to you about...' ,'_blank');
});

$(document).ready(function() {
	$('.carousel').carousel({interval: 6500});
  });