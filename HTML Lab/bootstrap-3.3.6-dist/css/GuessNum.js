// create a secretNumber var
var secretNumber = 6;

//create a currentUserNum var
var currentUserNum;

//Loop: Ask User for answer
while (currentUserNum != secretNumber) {
	currentUserNum = prompt("Guess a Number between 0 and 10");
	//Check answer to break loop or keep going
	if (currentUserNum == secretNumber) {
		alert("You guessed right");
	} else if (currentUserNum > secretNumber) {
		alert("Guess a bit lower");
	} else if (currentUserNum < secretNumber) {
		alert("Guess a bit higher");
	} else {
		alert("Please enter numbers only");
	}
}

