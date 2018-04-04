var movie1 = {
	name: "In Bruges",
	rating: 5,
	hasWatched: true
}

var movie2 = {
	name: "Frozen",
	rating: 4.5,
	hasWatched: false
}

var movie3 = {
	name: "Mad Max Fury Road",
	rating: 5,
	hasWatched: true
}

var movie4 = {
	name: "Les Miserables",
	rating: 3.5,
	hasWatched: false
}

var array = [movie1, movie2, movie3, movie4];
var watchString = "watched";

array.forEach(function(element) {
	if (element.hasWatched == false) {
		watchString = "not seen";
	}
	console.log("You have " + watchString + " " + element.name + " - " + element.rating + " stars");
})