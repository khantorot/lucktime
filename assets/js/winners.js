var media = document.querySelectorAll('.winners video');

for (var i = 0; i < media.length; i++) {
    media[i].addEventListener('mouseover', playVideo);
    media[i].addEventListener('click', playVideo);
    media[i].addEventListener('mouseleave', pauseVideo);
}

function playVideo(e) {
    var ID = e.target.getAttribute('data-id');
    media[ID].play();
}

function pauseVideo(e) {
    var ID = e.target.getAttribute('data-id');
    media[ID].pause()
}


window.onload = function () {
	setTimeout(function () {
		document.querySelector('.preloader').classList.add('preloader_hide');
	}, 3000)
}