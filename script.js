/*
	WEB 303 Assignment 1 - jQuery
	Justin Brierley
	W0724299
*/
$(document).ready(function() {
	/* $('#yearly-salary' && '#percent').on('change', function(evt){
		let salary = document.getElementById('yearly-salary').value;
		let percent = document.getElementById('percent').value;
		let moneyToSpend = salary * percent / 100 .toFixed(2);
		let amount = document.getElementById('amount');
		amount.textContent = "$" + moneyToSpend;
		console.log(moneyToSpend);
	}) */

	// The difference between using 'keyup' and 'change' is that 'keyup' updates the value when you enter a number
	// whereas 'change' you have to click outside the input field for the amount to update
	$('#yearly-salary' && '#percent').on('keyup', function(evt){
		let salary = document.getElementById('yearly-salary').value;
		let percent = document.getElementById('percent').value;
		let moneyToSpend = salary * percent / 100 .toFixed(2);
		let amount = document.getElementById('amount');
		amount.textContent = "$" + moneyToSpend;
		/* console.log(moneyToSpend); */
	})
})
