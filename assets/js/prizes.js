var verificationLink = document.querySelectorAll('.prize span');
var nameOfProduct = document.querySelectorAll('.prize h4');

for (var i = 0; i < verificationLink.length; i++) {
    verificationLink[i].onclick = function (e) {
        document.querySelector('#count').value = 1;
        document.querySelector('.sum').innerHTML = 100 + '<span>сом</span>';
        showModalWindow();
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


window.onload = function () {
	setTimeout(function () {
		document.querySelector('.preloader').classList.add('preloader_hide');
	}, 3000)
}