//4. Functions

// Make a small game called ZooKeeper that allows the user to play "Keeper" to a zoo animal of your choice. 
//The user should be prompted to name the animal. 
//There should be at least (4) actions which the user can take (e.g., FeedAnimal()). 
//When the user takes an action, the program should display a result including the animal's name (e.g., "Flipper the dolphin was happy you gave it a fish, so it did a backflip!"). 
//The game should continue until the user chooses to quit.

var sget = require('sget');

console.log("\nHowdy there, Zookeeper!");
nameAnimal();

//var animalName;

function nameAnimal(){
	var animalNameInput = sget("What shall we call your giraffe?").trim();
	animalName = animalNameInput;
	console.log("=============\n\n" + animalName + " seems like a nice name for a giraffe.\n");
	nextAction();
};

function nextAction(){
	var doNext = sget("=============\n\n" + "What would you like to do next?\n1) Feed " + animalName + "\n" + "2) Give " + animalName + " a bath\n" + "3) Clean " + animalName + "'s habitat\n" + "4) See " + animalName + " do a trick\n" + "5) Quit and go to bed.\n").trim();
	
	switch(doNext){
		case "1" :
			feedAnimal()
			break;
		case "2" :
			batheAnimal()
		break;
		case "3" :
			cleanCage()
		break;
		case "4" :
			doTricks()
		break;
		case "5" :
			quitGame();
		break;
		default :
			console.log("That is not a valid entry.");
	};
};

function feedAnimal(){
	console.log("=============\n\n" + "Yum! " + animalName + " loves the leaves you brought! But get ready to clean the cage :\)\n");
	nextAction();
};
function batheAnimal(){
	console.log("=============\n\n" + "Yeah, " + animalName + " was getting a little ripe. Good call on the bath.\n");	
	nextAction();
};
function cleanCage(){
	console.log("=============\n\n" + "A little fresh hay, some industrial disinfectant, and " + animalName + " is a happy camper. You are a nice zookeeper.\n");
	nextAction();
};
function doTricks(){
	console.log("=============\n\n" + "Ask " + animalName + " to do a backflip! Yeah right, giraffes don't do back flips, silly!\n");
	nextAction();
};
function quitGame(){
	console.log("=============\n\n" + "Goodnight, zookeeper! See you in the morning!\n");
};
