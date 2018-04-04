

var button = document.querySelector("button");

var body = document.querySelector("body");

function colorChanger() {
	body.classList.toggle("coloring-background");
}

button.addEventListener("click", colorChanger);