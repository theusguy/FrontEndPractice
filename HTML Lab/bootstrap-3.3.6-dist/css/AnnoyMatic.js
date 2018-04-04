var yes = prompt("Are we there yet");

while (!(yes == "yes" || yes == "yeah")) {
	yes = prompt("Are we there yet");
}

alert("Yay, we finally made it!");