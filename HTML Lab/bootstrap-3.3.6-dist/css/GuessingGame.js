var x = 7;

var num = prompt("Please guess a number.");

if (num > x) {
	alert("Too high. Please refresh page and guess again.");
} else if (num < x) {
	alert("Too low. Please refresh page and guess again.")
} else if (num == x) {
	alert("Correct. You guessed it.");
} else {
	alert("You are not entering numbers..");
}