// var declared
var height = "";
var width = "";
var obj = {
	key1: "height", 
	key2: "width"
};
var tree = "*";
var space = "";
var height = document.getElementById("height");
var width = document.getElementById("width");
var numberOfi  = "";
function height() {
	var heightInput = document.getElementById('height');
	outputDiv.innerHTML = height;
}
	// height.addEventListener("key1", function(event) {
 //    event.preventDefault();
 //    if (event.key1 == 13)
 //        height.click();
// });

// var keys = function() {  }

// element.attachEvent('onclick', myFunctionReference);
// element.addEventListener('click', myFunctionReference , false);

// set up link to html
// document.getElementById("treeBtn").addEventListener("click", 
// 	validateForm()){
//     document.getElementById("treeBtn").innerHTML = "Tree Growing";
// };
// function for form validation
// function validateForm() {
//     var x = document.button["treeBtn"].value;
//     if (x == null || x == "") {
//         alert("Both fields must have a value");
//         return false;
//     }
// }
// validateForm();

// function for tree grow
function treeFun() {
	for (var i = 0; i < tree.length; i++) {
		space = space + tree[i];  {
        }
		}
		console.log(space);
}
treeFun();
// new function no stack getting weird return 
function newTree(width, height) {
    var start = 2, html = '';
    for (var i=width; i--;) {
        html += new Array(Math.floor(i+1)).join(' ') + new Array((start=start+2)-2).join(height);
    }
    return html + '';
    var width = height.replace(/(.{6})/g, '').trim();
	console.log(width + height);
}
console.log( newTree(9,'\n', '*') );
newTree();
