var sget = require('sget');

console.log('\nEnter the temperature for the last seven days and\nI\'ll show you the average temperature for the week!');

var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tempLog = 0;

for( var i = 0, timeFrame = weekday.length; i < timeFrame; i++ ){
	var todaysTemp = sget( weekday[i] + '\'s temperature was: ');
	tempLog += Number(todaysTemp);
}

console.log('The average temperature for the week was: ' + Math.floor(tempLog/7) + ' degrees.');
