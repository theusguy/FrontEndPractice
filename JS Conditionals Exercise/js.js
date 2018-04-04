var age = prompt("What is your age?");

if (age < 0) {
	console.log("Error");
} else if (age < 18) {
	console.log("You may not enter");
} else if (age < 21) {
	console.log("You may enter, but not drink");
} else if (age === 21) {
	console.log("Happy 21st Birthday. You may enter and drink!")
} else {
	console.log("You may enter and drink.");
}

if (age % 2 == 1) {
	console.log("Your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square");
}