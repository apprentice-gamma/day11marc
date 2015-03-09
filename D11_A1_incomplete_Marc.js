//Create an interactive program which allows 

//a user to enter (3) numbers, 
var sget = require('sget');

console.log("Feed me three numbers in any order, and I'll\n order them from largest to smallest!");

var numOne = sget("First number: ");
var numTwo = sget("Second number: ");
var numThree = sget("Third number: ");
var numArray = [numOne, numTwo, numThree];
var displayArray = [];
//determines the order of the numbers from largest to smallest, 

for( var i = 0; i < numArray.length ; i++ ){
	//iterate through the array 
	if ( numArray[i] > numArray[0] ){
		displayArray[0] = numArray[i];
		// if numArray[i] is > the first array position (numArray[0]), them push it to the front [0] of the displayArray
	} else if( numArray[i] < numArray[1] ) { 
		displayArray[2] = numArray[i];
		// else if numArray[i] is < the first position (numArray[0]) push it to the end [2] of the array displayArray	
	} else {
		displayArray[1] = numArray[i];
		// if neither of those conditions are true then put it in the middle [1] of displayArray
	}	
}

//and displays the result.
		// write out numArray[i]



// var something = sget('Say something. I\'ll wait.');
// console.log('You said', something);

// sget('Leave word and you will be heard.', function(data) {
//   console.log('I heard you said', data);
// });
// console.log('\nThis test is not over.');