const cardImage = document.querySelector('.card-image');
const cardLogo = document.querySelector('.card-logo');
const cardFront = document.querySelector('.card-front');


(function() {
	document.getElementById('sum').innerHTML = location.search.slice(1) + '$';
})();

document.querySelector('#card-number').addEventListener('keyup', function(){
    // this.value = this.value.replace(/[^\d]/g, '');

});

document.querySelector('#card-month').addEventListener('keyup', function() {
	this.value = this.value.replace(/[^\d]/g, '');
})

document.querySelector('#card-number').addEventListener('input', function() {
	let cardNumber = this.value;

	if(cardNumber.length >= 5) {
		let cardInfo = new CardInfo(cardNumber, {
			banksLogosPath: 'node_modules/card-info/dist/banks-logos/',
			brandsLogosPath: 'node_modules/card-info/dist/brands-logos/'
		});

		this.value = cardInfo.numberNice;

		if(cardNumber.length == 7) {
			cardImage.src = cardInfo.bankLogo;
			cardLogo.src = cardInfo.brandLogo;
			cardFront.style.backgroundColor = cardInfo.backgroundColor;
		}

		if(cardNumber.length < 7) {
			cardImage.src = '';
			cardLogo.src = '';
			cardFront.style.backgroundColor = '#D0D0D0';
		}
	}
})

