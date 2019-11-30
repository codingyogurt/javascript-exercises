function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (numArray) {
	return numArray.reduce((sum, item) => {
		return sum += item;
	}, 0);
}

function multiply (numArray) {
	return numArray.reduce((total, item) => {
		if (total === 0){
			total = item;
			return total;
		}
		return total *= item;
	}, 0);
}

function power(num, power) {
	let result = num;
	for(i = 1; i < power; i++){
		result *= num;
	}
	return result;
}

function factorial(num) {
	if (num === 0){
		return 1;
	}

	return num * factorial(num-1);
	/**psuedocode
	 * base: num * num-1
	 * case: while i < num
	 */
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}