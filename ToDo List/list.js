var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
	if (input === "list") {
		console.log("**********");
		todos.forEach(function(TODO, i) {
			console.log(i + ": " + TODO +"\n");
		});
		console.log("**********");
	} else if (input === "new") {
	var newTodo = prompt("Enter new Todo");

	todos.push(newTodo);
	} else if (input === "delete") {
		var index = prompt("Enter of index to delete");
		todos.splice(index, 1);
	}
	input = prompt("What would you like to do?");
}
console.log("OK,YOU QUIT THE APP");