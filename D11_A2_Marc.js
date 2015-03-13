

var sget = require('sget');
var desiredPassword;
var passwordLength;
var hasCaps = false;
var userInput;

var getInput = function(){
	desiredPassword = userInput.trim();
	passwordLength = desiredPassword.length;
	checkForLength(desiredPassword);
}

var checkForLength = function( input ){
	if ( passwordLength > 9 ){
		doesItHaveCaps(desiredPassword);
	} else {
		errorMessage();
		getInput(userInput = sget('\nPlease create a password: '));
	}
};

var doesItHaveCaps = function( input ){
	for ( var i = 0; i < passwordLength; i++ ){
		var character = input.charAt(i);

		if( character === "!" || character === character.toUpperCase() ) {
			hasCaps = true;
		} 			
	}
	confirmPassword();
};

var confirmPassword = function(){
	if(hasCaps==true){
	 	console.log('\nThanks! Check your inbox for a confirmation email from Cat Fancy Magazine.\nThat\'s all for meow!');
	} else {
		errorMessage();
		checkForLength();
	}	
}

function errorMessage(){
	console.log('\n- - - ERROR - - -\nA valid password contains at least\none capital letter or exclaimation point\nand needs to be at least 10 characters long.');
};

getInput(userInput = sget('\nPlease create a password: '));

