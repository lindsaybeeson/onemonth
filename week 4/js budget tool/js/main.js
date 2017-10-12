// GENERAL

var body = document.querySelector('body');
var container = document.createElement('div');
body.appendChild(container);

container.innerHTML = "Hello";

var input = "salary lindsay";


// TABLETOP

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1yR6hJ1nAZe29cWaaYoaEiGuU4St1UlBNPTmI8KMH_D8/edit?usp=sharing';

function init() {
Tabletop.init( { key: publicSpreadsheetUrl,
                 callback: showInfo,
                 simpleSheet: true } )
}

function showInfo(data, tabletop) {
//	console.log(data);
	data.forEach(function(data){
		var budgetItem = data['Budget Item'];
		var daySpending = data['Spending / day'];

//		container.innerHTML += budgetItem + ' ' + daySpending + '<br>';

		if (budgetItem = input) {
		container.innerHTML += daySpending + '</br>';
		}
	});
}

window.addEventListener('DOMContentLoaded', init)