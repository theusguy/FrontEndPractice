function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);

	}
}

function isUniform(array) {
	var test = true;
	array.forEach(function(element){
		if (array[0] == element) {
			test = true;
		} else {
			test = false;
			return test;
		}
	})
	return test;
}

function sumArray(array) {
	var sum = 0;
	array.forEach(function(element) {
		sum += element;
	})
	return sum;
}

function max(array) {
	var biggest = array[0];
	array.forEach(function(element) {
		if (element > biggest) {
			biggest = element;
		}
	})
	return biggest;
}

var nums = [45,65,77,44];

//myForEach(nums, Func);

function myForEach(arr, func) {
	//loop through the array
	for(var i = 0; i < arr.length; i++) {
		//call func for each item in array
		func();
	}
	
}

var colors = ["red", "orange", "yellow"];
















