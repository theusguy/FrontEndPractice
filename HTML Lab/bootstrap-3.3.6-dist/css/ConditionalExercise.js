var age = prompt("Please enter your age");

if (age < 0) {
	console.log("This has to be a mistake sir/ma'am.");
} else if (age < 18) {
	console.log("You are not old enough to enter the venue.")
} else if (age < 21) {
	console.log("You can enter the venue but not drink.");
} else {
	console.log("You are old enough to enter and drink in the venue.")
}

if (age == 21) {
	console.log("Happy 21st birthday!!");
}
 if (age % 2 == 1) {
 	console.log("Your age is odd!");
 }

 if (((age^0.5) % 1) == 0) {
 	console.log("Your age is a perfect square!");
 }