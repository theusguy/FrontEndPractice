var numSquares = 6;

var colors = generateRandomColors(numSquares);


//Select the color squares
var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

//Select the span that changes what color to choose
var colorDisplay = document.getElementById("colorDisplay");

//Select message
var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");

//sELECT
var resetButton = document.querySelector("#reset");

//select
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



//Manipulate Easy Mode Button

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
//manipulate Hard Mode Button
hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

//Manipulate reset button
resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";

	this.textContent = "New Colors";

	messageDisplay.textContent = "";
});

//Manipulate the span to change into whatever color is picked
colorDisplay.textContent = pickedColor;

//Manipulate each sqaure to get assigned a color from array
for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";

		}
	})
}

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change wach color to match given color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return an array
	return arr;
}

function randomColor() {
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);

	//picka  green from 0 - 255
	var g = Math.floor(Math.random() * 256);

	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g + ", " + b +")"
}