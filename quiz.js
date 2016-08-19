
var grow = document.getElementById("treeGrow");

var myObject = {height: "number",character: "inputChar"};
console.log(myObject);

function anotherTree(clickevent){
	console.log("event", clickevent);
	var number = document.getElementById('number').value
	var inputChar = document.getElementById("inputChar").value
	var consoleResults="";
	
	for (var i = 0; i < number; i++) {
		var stars = "";
		for (var j = 0; j < number - i; j++) {
			stars = stars + ' ';
		}
		for (var k = 0; k < 2 * i - 1; k++) {
			stars = stars + "*"
		}
		consoleResults += stars;
	console.log(stars);
	}
}

grow.addEventListener("click", anotherTree);

// var person = {};
// var key = "name";

// person[key]  this is same as person.name  = "John";

// console.log(person);