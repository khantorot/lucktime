//header slider
$(function () {

	if (document.documentElement.clientWidth <= 730) {
		$('.winners').slick({
			arrows: true,
			infinite: false,
			adaptiveHeight: true,
			slidesToShow: 1,
			autoplay: false,
			speed: 500
		});
	} else {
		$('.winners').slick({
			arrows: true,
			infinite: false,
			adaptiveHeight: true,
			slidesToShow: 4,
			autoplay: false,
			speed: 500
		});
	}
})


window.addEventListener('scroll', function () {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;

	if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
		if (scrolled >= 50) {
			menuBtn.style.left = 30 + 'px';
		} else {
			menuBtn.style.left = 100 + 'px';
		}
	}
	if (scrolled >= document.documentElement.clientHeight - 200) {
		document.querySelector('.bgImg').classList.add('bgImg_show');
	} else {
		document.querySelector('.bgImg').classList.remove('bgImg_show');
	}
});





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


var verificationLink = document.querySelectorAll('.prize span');
var nameOfProduct = document.querySelectorAll('.prize h4');

for (var i = 0; i < verificationLink.length; i++) {
	verificationLink[i].onclick = function (e) {
		document.querySelector('#count').value = 1;
		document.querySelector('.sum').innerHTML = 100 + '<span>сом</span>';
		showModalWindow()
		document.querySelector('.verification').classList.add('active_block');
		var ID = e.target.getAttribute('data-id');
		document.querySelector('.choosenProduct').innerHTML = nameOfProduct[ID].innerHTML;
	}
}

document.querySelector('.verification').addEventListener('click', function (e) {
	var count = document.querySelector('#count').value;
	if (e.target.classList.contains('plus')) {
		count++;
		document.querySelector('#count').value = count;
		document.querySelector('.sum').innerHTML = 100 * count + '<span>сом</span>';
	}
	if (e.target.classList.contains('minus')) {
		if (count > 1) {
			count--;
			document.querySelector('#count').value = count;
			var price = document.querySelector('.textBlock h5');
			document.querySelector('.sum').innerHTML = 100 * count + '<span>сом</span>';
		}
	}
})






const cards = document.querySelectorAll('.prize');

cards.forEach(element => {
    element.addEventListener('mousemove', startRotate);
    element.addEventListener('mouseout', stopRotate);
});

function startRotate(e) {
    const cardItem = this.querySelector('.prize_item');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 7 + 'deg) rotateY(' + (e.offsetX - halfWidth) / 7 + 'deg)';
}

function stopRotate() {
    const cardItem = this.querySelector('.prize_item');
    cardItem.style.transform = 'rotate(0)';
}




function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			daysSpan.innerHTML = 0;
			hoursSpan.innerHTML = '00';
			minutesSpan.innerHTML = '00';
			secondsSpan.innerHTML = '00';
			document.querySelector('.randomID').classList.add('randomID_hide');
			clearInterval(timeinterval)
			randomIntFromInterval();
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);

}
var deadline = "December 30 2022 20:56:00 GMT+6";
initializeClock('countdown', deadline);





function randomIntFromInterval(minUsers, maxUsers) {
	var usersID = [123456789, 234567890, 345678901, 456789012, 567890123, 678901234, 78901234567];
	var minUsers = 0;
	var maxUsers = usersID.length;
	var randomUser;
	if (localStorage.getItem('randomUser') != null) {
		randomUser = localStorage.getItem('randomUser');
	} else {
		var randomID = Math.floor(Math.random() * (maxUsers - minUsers) + minUsers);
		randomUser = usersID[randomID];
		localStorage.setItem('randomUser', randomUser)
	}


	var n1 = (String(randomUser)).slice(0, 1);
	var n2 = (String(randomUser)).slice(1, 2);
	var n3 = (String(randomUser)).slice(2, 3);
	var n4 = (String(randomUser)).slice(3, 4);
	var n5 = (String(randomUser)).slice(4, 5);
	var n6 = (String(randomUser)).slice(5, 6);
	var n7 = (String(randomUser)).slice(6, 7);
	var n8 = (String(randomUser)).slice(7, 8);
	var n9 = (String(randomUser)).slice(8, 9);

	n1 = Number(n1);
	n2 = Number(n2);
	n3 = Number(n3);
	n4 = Number(n4);
	n5 = Number(n5);
	n6 = Number(n6);
	n7 = Number(n7);
	n8 = Number(n8);
	n9 = Number(n9);


	var nums = document.querySelectorAll('.randomID span');
	var ns = [n1, n2, n3, n4, n5, n6, n7, n8, n9]

	for (var i = 0; i < ns.length; i++) {

		if (ns[i] == 0) {
			nums[i].style.transition = '1s';
		} else if (ns[i] == 1) {
			nums[i].style.transition = '2s';
		} else if (ns[i] == 2) {
			nums[i].style.transition = '3s';
		} else if (ns[i] == 3) {
			nums[i].style.transition = '4s';
		} else if (ns[i] == 4) {
			nums[i].style.transition = '5s';
		} else if (ns[i] == 5) {
			nums[i].style.transition = '6s';
		} else if (ns[i] == 6) {
			nums[i].style.transition = '7s';
		} else if (ns[i] == 7) {
			nums[i].style.transition = '8s';
		} else if (ns[i] == 8) {
			nums[i].style.transition = '9s';
		} else if (ns[i] == 9) {
			nums[i].style.transition = '10s';
		}

		if (n1 == 0) {
			nums[1].style.transitionDelay = '0s';
		} else if (n1 == 1) {
			nums[1].style.transitionDelay = '1s';
		} else if (n1 == 2) {
			nums[1].style.transitionDelay = '2s';
		} else if (n1 == 3) {
			nums[1].style.transitionDelay = '3s';
		} else if (n1 == 4) {
			nums[1].style.transitionDelay = '4s';
		} else if (n1 == 5) {
			nums[1].style.transitionDelay = '5s';
		} else if (n1 == 6) {
			nums[1].style.transitionDelay = '6s';
		} else if (n1 == 7) {
			nums[1].style.transitionDelay = '7s';
		} else if (n1 == 8) {
			nums[1].style.transitionDelay = '8s';
		} else if (n1 == 9) {
			nums[1].style.transitionDelay = '9s';
		}

		if (ns[i] == 0) {
			nums[i].style.transform = 'translateY(0%)';
		} else if (ns[i] == 1) {
			nums[i].style.transform = 'translateY(-10%)';
		} else if (ns[i] == 2) {
			nums[i].style.transform = 'translateY(-20%)';
		} else if (ns[i] == 3) {
			nums[i].style.transform = 'translateY(-30%)';
		} else if (ns[i] == 4) {
			nums[i].style.transform = 'translateY(-40%)';
		} else if (ns[i] == 5) {
			nums[i].style.transform = 'translateY(-50%)';
		} else if (ns[i] == 6) {
			nums[i].style.transform = 'translateY(-60%)';
		} else if (ns[i] == 7) {
			nums[i].style.transform = 'translateY(-70%)';
		} else if (ns[i] == 8) {
			nums[i].style.transform = 'translateY(-80%)';
		} else if (ns[i] == 9) {
			nums[i].style.transform = 'translateY(-90%)';
		}

		if (n2 == 0) {
			nums[2].style.transitionDelay = 0 + n1 + 's';
		} else if (n2 == 1) {
			nums[2].style.transitionDelay = 1 + n1 + 's';
		} else if (n2 == 2) {
			nums[2].style.transitionDelay = 2 + n1 + 's';
		} else if (n2 == 3) {
			nums[2].style.transitionDelay = 3 + n1 + 's';
		} else if (n2 == 4) {
			nums[2].style.transitionDelay = 4 + n1 + 's';
		} else if (n2 == 5) {
			nums[2].style.transitionDelay = 5 + n1 + 's';
		} else if (n2 == 6) {
			nums[2].style.transitionDelay = 6 + n1 + 's';
		} else if (n2 == 7) {
			nums[2].style.transitionDelay = 7 + n1 + 's';
		} else if (n2 == 8) {
			nums[2].style.transitionDelay = 8 + n1 + 's';
		} else if (n2 == 9) {
			nums[2].style.transitionDelay = 9 + n1 + 's';
		}

		if (n3 == 0) {
			nums[3].style.transitionDelay = 0 + n1 + n2 + 's';
		} else if (n3 == 1) {
			nums[3].style.transitionDelay = 1 + n1 + n2 + 's';
		} else if (n3 == 2) {
			nums[3].style.transitionDelay = 2 + n1 + n2 + 's';
		} else if (n3 == 3) {
			nums[3].style.transitionDelay = 3 + n1 + n2 + 's';
		} else if (n3 == 4) {
			nums[3].style.transitionDelay = 4 + n1 + n2 + 's';
		} else if (n3 == 5) {
			nums[3].style.transitionDelay = 5 + n1 + n2 + 's';
		} else if (n3 == 6) {
			nums[3].style.transitionDelay = 6 + n1 + n2 + 's';
		} else if (n3 == 7) {
			nums[3].style.transitionDelay = 7 + n1 + n2 + 's';
		} else if (n3 == 8) {
			nums[3].style.transitionDelay = 8 + n1 + n2 + 's';
		} else if (n3 == 9) {
			nums[3].style.transitionDelay = 9 + n1 + n2 + 's';
		}

		if (n4 == 0) {
			nums[4].style.transitionDelay = 0 + n1 + n2 + n3 + 's';
		} else if (n4 == 1) {
			nums[4].style.transitionDelay = 1 + n1 + n2 + n3 + 's';
		} else if (n4 == 2) {
			nums[4].style.transitionDelay = 2 + n1 + n2 + n3 + 's';
		} else if (n4 == 3) {
			nums[4].style.transitionDelay = 3 + n1 + n2 + n3 + 's';
		} else if (n4 == 4) {
			nums[4].style.transitionDelay = 4 + n1 + n2 + n3 + 's';
		} else if (n4 == 5) {
			nums[4].style.transitionDelay = 5 + n1 + n2 + n3 + 's';
		} else if (n4 == 6) {
			nums[4].style.transitionDelay = 6 + n1 + n2 + n3 + 's';
		} else if (n4 == 7) {
			nums[4].style.transitionDelay = 7 + n1 + n2 + n3 + 's';
		} else if (n4 == 8) {
			nums[4].style.transitionDelay = 8 + n1 + n2 + n3 + 's';
		} else if (n4 == 9) {
			nums[4].style.transitionDelay = 9 + n1 + n2 + n3 + 's';
		}

		if (n5 == 0) {
			nums[5].style.transitionDelay = 0 + n1 + n2 + n3 + n4 + 's';
		} else if (n5 == 1) {
			nums[5].style.transitionDelay = 1 + n1 + n2 + n3 + n4 + 's';
		} else if (n5 == 2) {
			nums[5].style.transitionDelay = 2 + n1 + n2 + n3 + n4 + 's';
		} else if (n5 == 3) {
			nums[5].style.transitionDelay = 3 + n1 + n2 + n3 + n4 + 's';
		} else if (n5 == 4) {
			nums[5].style.transitionDelay = 4 + n1 + n2 + n3 + n4 + 's';
		} else if (n5 == 5) {
			nums[5].style.transitionDelay = 5 + n1 + n2 + n3 + n4 + 's';
		} else if (n5 == 6) {
			nums[5].style.transitionDelay = 6 + n1 + n2 + n3 + n4 + 's';
		} else if (n5 == 7) {
			nums[5].style.transitionDelay = 7 + n1 + n2 + n3 + n4 + 's';
		} else if (n5 == 8) {
			nums[5].style.transitionDelay = 8 + n1 + n2 + n3 + n4 + 's';
		} else if (n5 == 9) {
			nums[5].style.transitionDelay = 9 + n1 + n2 + n3 + n4 + 's';
		}

		if (n6 == 0) {
			nums[6].style.transitionDelay = 0 + n1 + n2 + n3 + n4 + n5 + 's';
		} else if (n6 == 1) {
			nums[6].style.transitionDelay = 1 + n1 + n2 + n3 + n4 + n5 + 's';
		} else if (n6 == 2) {
			nums[6].style.transitionDelay = 2 + n1 + n2 + n3 + n4 + n5 + 's';
		} else if (n6 == 3) {
			nums[6].style.transitionDelay = 3 + n1 + n2 + n3 + n4 + n5 + 's';
		} else if (n6 == 4) {
			nums[6].style.transitionDelay = 4 + n1 + n2 + n3 + n4 + n5 + 's';
		} else if (n6 == 5) {
			nums[6].style.transitionDelay = 5 + n1 + n2 + n3 + n4 + n5 + 's';
		} else if (n6 == 6) {
			nums[6].style.transitionDelay = 6 + n1 + n2 + n3 + n4 + n5 + 's';
		} else if (n6 == 7) {
			nums[6].style.transitionDelay = 7 + n1 + n2 + n3 + n4 + n5 + 's';
		} else if (n6 == 8) {
			nums[6].style.transitionDelay = 8 + n1 + n2 + n3 + n4 + n5 + 's';
		} else if (n6 == 9) {
			nums[6].style.transitionDelay = 9 + n1 + n2 + n3 + n4 + n5 + 's';
		}

		if (n7 == 0) {
			nums[7].style.transitionDelay = 0 + n1 + n2 + n3 + n4 + n5 + n6 + 's';
		} else if (n7 == 1) {
			nums[7].style.transitionDelay = 1 + n1 + n2 + n3 + n4 + n5 + n6 + 's';
		} else if (n7 == 2) {
			nums[7].style.transitionDelay = 2 + n1 + n2 + n3 + n4 + n5 + n6 + 's';
		} else if (n7 == 3) {
			nums[7].style.transitionDelay = 3 + n1 + n2 + n3 + n4 + n5 + n6 + 's';
		} else if (n7 == 4) {
			nums[7].style.transitionDelay = 4 + n1 + n2 + n3 + n4 + n5 + n6 + 's';
		} else if (n7 == 5) {
			nums[7].style.transitionDelay = 5 + n1 + n2 + n3 + n4 + n5 + n6 + 's';
		} else if (n7 == 6) {
			nums[7].style.transitionDelay = 6 + n1 + n2 + n3 + n4 + n5 + n6 + 's';
		} else if (n7 == 7) {
			nums[7].style.transitionDelay = 7 + n1 + n2 + n3 + n4 + n5 + n6 + 's';
		} else if (n7 == 8) {
			nums[7].style.transitionDelay = 8 + n1 + n2 + n3 + n4 + n5 + n6 + 's';
		} else if (n7 == 9) {
			nums[7].style.transitionDelay = 9 + n1 + n2 + n3 + n4 + n5 + n6 + 's';
		}

		if (n8 == 0) {
			nums[8].style.transitionDelay = 0 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + 's';
		} else if (n8 == 1) {
			nums[8].style.transitionDelay = 1 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + 's';
		} else if (n8 == 2) {
			nums[8].style.transitionDelay = 2 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + 's';
		} else if (n8 == 3) {
			nums[8].style.transitionDelay = 3 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + 's';
		} else if (n8 == 4) {
			nums[8].style.transitionDelay = 4 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + 's';
		} else if (n8 == 5) {
			nums[8].style.transitionDelay = 5 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + 's';
		} else if (n8 == 6) {
			nums[8].style.transitionDelay = 6 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + 's';
		} else if (n8 == 7) {
			nums[8].style.transitionDelay = 7 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + 's';
		} else if (n8 == 8) {
			nums[8].style.transitionDelay = 8 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + 's';
		} else if (n8 == 9) {
			nums[8].style.transitionDelay = 9 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + 's';
		}
	}
}


