//4. Functions

// Make a small game called ZooKeeper that allows the user to play "Keeper" to a zoo animal of your choice. 
//The user should be prompted to name the animal. 
//There should be at least (4) actions which the user can take (e.g., FeedAnimal()). 
//When the user takes an action, the program should display a result including the animal's name (e.g., "Flipper the dolphin was happy you gave it a fish, so it did a backflip!"). 
//The game should continue until the user chooses to quit.

var sget = require('sget');

console.log("Howdy there, Zookeeper!");
nameAnimal();

var animalName;

function nameAnimal(){
	var animalNameInput = sget("What shall we call your giraffe?");
	animalName = animalNameInput;
	console.log(animalName + "seems like a nice name for a giraffe.");
};

function nextAction(){
	console.log("What would you like to do next?\n");
};

function feedAnimal(){};
function batheAnimal(){};
function cleanCage(){};
function doTricks(){};

