var sget = require('sget');

console.log('\nEnter the temperature for the last seven days and\nI\'ll show you the average temperature for the week!');

var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tempLog = 0;

for( var i = 0; i < 7; i++ ){
	var todaysTemp = sget( weekday[i] + '\'s temperature was: ');
	tempLog += Number(todaysTemp);
}

console.log('The average temperature for the week was: ' + Math.floor(tempLog/7) + ' degrees.');
//Create an interactive program which allows 
//a user to enter in the average temperature for (7) days. 
//When the user has finished entering data, calculate the average temperature for the week 
//and display the result.