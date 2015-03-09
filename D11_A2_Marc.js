var sget = require('sget');

function errorMessage(){
	console.log('\n- - - ERROR - - -\nA valid password contains at least\none capital letter or exclaimation point\nand needs to be at least 10 characters long.');
};

var desiredPassword = sget('\nPlease create a password: ');
var hasCaps = false;
var hasBang = false;

var doesItHaveCaps = function( desiredPassword ){
	var i = 0;
	var character = desiredPassword.charAt(i);

	for ( var i = 0; i < desiredPassword.length; i++ ){
		if(character === "!"){
			hasBang = true;
		} else if (character === character.toUpperCase()){
			hasCaps = true;
		}
	}
};

var createPassword = function( desiredPassword ){

	if ( desiredPassword.length >= 10 ){

		doesItHaveCaps( desiredPassword );

		if(hasBang || hasCaps){
			console.log('Thanks! Check your inbox for a confirmation email from Cat Fancy Magazine.\nThat\'s all for meow!');
		} else {
			errorMessage();
			createPassword();
		}

	} else {
		errorMessage();
		createPassword();
	}
};

createPassword(desiredPassword);
// a user to create a password. 
//If the password is at least 10 characters long AND contains at least (1) capital letter OR an exclamation point, display a confirmation message; otherwise, display an error.