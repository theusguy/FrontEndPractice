//function to figure out if input id even or not
function isEven(x) {
	if (x % 2 == 0) {
		return true;
	} else {
		return false;
	} 
}
//function to find the factorial
var holder;
function factorial(i) {
	holder = 1;
	if (i > 0) {
		for (var f = i; f > 1; f--) {
		holder *= f;
		}
		return holder;
	} else {
		return holder;
	}
}
//function to change kebab case to snake case
function kebabToSnake(z) {
	 z = z.replace(/-/g, "_");
	return z;
}


