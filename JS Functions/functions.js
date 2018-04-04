function isEven(num) {
	if (num % 2 == 0) {
		return true;
	} else {
		return false;
	}

}

function factorial(num) {
	var result = 1;
	while (num > 0) {
		result *= num;
		num--;
	}
	return result;
}

function kebabToSnake(str) {
	for (var i = 0; i < str.length; i++) {
		if (str[i].equals("-")) {
			str[i] = "_";
		}
	}
	return str;
} 