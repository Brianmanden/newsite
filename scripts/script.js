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

/--- Background ---/
var imgs = [
	"./img/plasma01.png",
	"./img/plasma02.png",
	"./img/plasma03.png",
	"./img/plasma04.png",
	"./img/plasma05.png",
	"./img/plasma06.png",
	"./img/plasma07.png"
];

var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var counter = 0;
var backgroundImage = new Image();

backgroundImage.onload = function(){
	ctx.drawImage(
		backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height,
		0, 0, canvas.width, canvas.height * 2
	);
}
backgroundImage.src = imgs[0];

setInterval(function(){
	nextImage();
}, 60000);

function nextImage(){
	counter++;
	counter < imgs.length - 1 ? backgroundImage.src = imgs[counter] : counter = 0;
};
