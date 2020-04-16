const selectNumberOfLicenses = document.getElementById('select-number-of-licenses').options;
const buyNow = document.getElementById('buy-now');
const plan = document.getElementById('plan');
const radioLicense = document.getElementsByName('license');
const total = document.getElementById('total');

let priceOfLicense = 13;
let numberOfLicenses = 10;

function checkLicensePlan() {
	let selectedPlan;

	for(let i = 0; i < radioLicense.length; i++) {
		if(radioLicense[i].checked) {
			selectedPlan = radioLicense[i].nextElementSibling.textContent.slice(12, 14);	
			priceOfLicense = +radioLicense[i].value;
		}
	}

	addPlan(selectedPlan);
	addTotal()
};

function addPlan(addText) {
	plan.textContent = addText;
}

function checkNumberOfLicense() {

	for(let i = 0; i < selectNumberOfLicenses.length; i++) {
		if(selectNumberOfLicenses[i].selected) {
			numberOfLicenses = +selectNumberOfLicenses[i].value;
		}
	}

	addTotal();
}

function addPlan(addText) {
	plan.textContent = addText;
}

function addTotal() {
	total.textContent = `$${numberOfLicenses * priceOfLicense}`;
	return numberOfLicenses * priceOfLicense;
}

buyNow.onclick = function() {
	window.open(`PageOfPayment/index.html?${addTotal()}`);
}
