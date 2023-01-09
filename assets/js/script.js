


window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    scrolled = scrolled * 0.4;
    document.querySelector(".circular-text").style.transform = "rotate(" + scrolled + "deg)";
}








const circleType = new CircleType(
	document.getElementById("rotated")
).radius(80);







const menuBtn = document.querySelector('.menuBtn');
const menuBlock = document.querySelector('.menuBlock');
const mainLinks = document.querySelector('.mainLinks')

menuBtn.onclick = function () {
	this.classList.toggle('menuBtn_active');
	menuBlock.classList.toggle('menuBlock_show');
	mainLinks.classList.toggle('mainLinks_translate');
}


var modalWindow = document.querySelector('.modalWindow');
var closeBtn = document.querySelectorAll('.closeBtn');
var modalWindowEl = document.querySelectorAll('.modalWindow div');

for (var i = 0; i < closeBtn.length; i++) {
	closeBtn[i].onclick = function () {
		modalWindow.classList.remove('modalWindow_show');
	}
}

document.querySelector('.singIn').onclick = showSingInBlock;
document.querySelector('.singIn1').onclick = showSingInBlock;
document.querySelector('.singIn2').onclick = showSingInBlock;
document.querySelector('.singIn3').onclick = showSingInBlock;
document.querySelector('.register').onclick = showRegisterBlock;
document.querySelector('.register1').onclick = showRegisterBlock;
document.querySelector('.register2').onclick = showRegisterBlock;
document.querySelector('.register3').onclick = showRegisterBlock;

function showSingInBlock() {
	showModalWindow()
	document.querySelector('.singInBlock').classList.add('active_block')
}

function showRegisterBlock() {
	showModalWindow()
	document.querySelector('.registerBlock').classList.add('active_block')
}

function showModalWindow() {
	for (var i = 0; i < modalWindowEl.length; i++) {
		modalWindowEl[i].classList.remove('active_block')
	}
	modalWindow.classList.add('modalWindow_show');
	menuBlock.classList.remove('menuBlock_show');
	menuBtn.classList.remove('menuBtn_active');
	mainLinks.classList.remove('mainLinks_translate');
}
document.querySelector('.forgotPassBtn').onclick = function () {
	showModalWindow()
	document.querySelector('.forgotPassBlock').classList.add('active_block');
}







document.querySelector('.wrapper').onclick = function () {
	menuBtn.classList.remove('menuBtn_active');
	menuBlock.classList.remove('menuBlock_show');
	mainLinks.classList.remove('mainLinks_translate');
}

