
var sget = require('sget');


var desiredPassword = sget('\nPlease create a password: ');
var hasCaps = false;
var hasBang = false;

console.log(typeof desiredPassword);

var createPassword = function( input ){
	console.log(input);
	if ( input.length  > 9 ){
	
		doesItHaveCaps( desiredPassword );

		// if(hasBang || hasCaps){
		// 	console.log('Thanks! Check your inbox for a confirmation email from Cat Fancy Magazine.\nThat\'s all for meow!');
		// } else {
		// 	errorMessage();
		// 	createPassword();
		// }

	} else {
		errorMessage();
		createPassword();
	}
};

var doesItHaveCaps = function( input ){
	
	console.log("TACO TIME");

	var i = 0;
	var character = input.charAt(i);

	for ( var i = 0; i < input.length; i++ ){
		if(character === "!"){
			hasBang = true;
		} else if (character === character.toUpperCase()){
			hasCaps = true;
		}
	}
};

function errorMessage(){
	console.log('\n- - - ERROR - - -\nA valid password contains at least\none capital letter or exclaimation point\nand needs to be at least 10 characters long.');
};

createPassword(desiredPassword);
// a user to create a password. 
//If the password is at least 10 characters long AND contains at least (1) capital letter OR an exclamation point, display a confirmation message; otherwise, display an error.