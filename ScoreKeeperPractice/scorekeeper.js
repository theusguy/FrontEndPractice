//Select Home Button and Score
var homeButton = document.querySelector("#home");
var homeDisplay = document.querySelector("#homeDisplay");
var homeScore = 0;

//Winning Score
var winningScore = 5;

//GameOver boolean
var gameOver = false;

//Select Guest Button and Score
var guestButton = document.querySelector("#guest");
var guestDisplay = document.querySelector("#guestDisplay");
var guestScore = 0;

//Select Reset Button
var resetButton = document.querySelector("#reset");

//Select input button
var input = document.querySelector("input");

//Selecting value of winning Score
var valueInput = document.querySelector(".value")

//Manipulate Home Button to increment home score
homeButton.addEventListener("click", function() {
	if (!gameOver) {
		homeScore++;
		if (homeScore == winningScore) {
			gameOver = true;
			homeDisplay.classList.add("green");
		}
		homeDisplay.textContent = homeScore;
	}

})

//Manipulate Guest Button to increment guest score
guestButton.addEventListener("click", function() {
	if (!gameOver) {
		guestScore++;
		if (guestScore == winningScore) {
			gameOver = true;
			guestDisplay.classList.add("green");
		}
		guestDisplay.textContent = guestScore;
	}
})

//seperated reset function becuase it will be used more than once
function reset() {
	homeScore = 0;
	guestScore = 0;
	homeDisplay.textContent = homeScore;
	guestDisplay.textContent = guestScore;
	gameOver = false;
	homeDisplay.classList.remove("green");
	guestDisplay.classList.remove("green");
}
//Manipulate reset button to completely reset all scores.
resetButton.addEventListener("click", function() {
	reset();
})

//Manipulate input (number) to change the winning score  accordingly
input.addEventListener("change", function() {
	valueInput.textContent = input.value;
	winningScore = Number(input.value);
	reset();

})



console.log("CONNECTED")