var number = 4;

var guess = prompt("Guess a number");

while (guess !== number) {
	if (guess > number) {
		guess = prompt("Too High! Try again");
	}
	if (guess < number) {
		guess = prompt("Too Low! Try again");
	}
}

if (guess === number) {
	alert("Congrats! You guessed it.")
}