//Create an interactive program which allows 

//a user to enter (3) numbers, 
var sget = require('sget');

console.log("= = = = = = = = = = = =\nFeed me three numbers in any order.\nI'll order them from largest to smallest!");

function orderNums(){
	var numOne = sget("First number: ").trim();
	var numTwo = sget("Second number: ").trim();
	var numThree = sget("Third number: ").trim();
	var numArray = [numOne, numTwo, numThree];
	var displayNums = numArray.sort(function(a,b){return a - b});
	
	console.log("From smallest to largest, your numbers are:")
	for (var i = 0; i < displayNums.length; i++){

		switch(i){
			case 0:
			console.log(displayNums[i] + ", ");	
			break;
			case 1:
			console.log(displayNums[i] + " & ");	
			break;
			default: 
			console.log(displayNums[i]);
		}
	}	
}

orderNums();

