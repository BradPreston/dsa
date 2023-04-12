export function factorial(num) {
	if (num === 1 || num === 0) return 1;
	return num * factorial(num - 1);
}

export function isItOdd(arr) {
	if (arr.length === 0) return;
	if (arr[0] % 2 === 0) console.log(arr[0], "Even");
	else console.log(arr[0], "Odd");
	arr.shift();
	return isItOdd(arr);
}

export function collectOdds(arr) {
	let result = [];
	function helper(input) {
		if (input.length === 0) return;
		if (input[0] % 2 !== 0) result.push(input[0]);
		return helper(input.slice(1));
	}
	helper(arr);
	return result;
}

export function collectEven(arr) {
	let newArr = [];
	if (arr.length === 0) return newArr;
	if (arr[0] % 2 === 0) newArr.push(arr[0]);
	newArr = newArr.concat(collectEven(arr.slice(1)));
	return newArr;
}

export function power(base, exponent) {
	if (exponent === 0) return 1;
	let total = 1;
	let iterations = 0;
	(function helper(num, exp) {
		if (iterations === exp) return;
		total *= num;
		iterations++;
		return helper(num, exp);
	})(base, exponent);
	return total;
}

export function productOfArray(arr) {
	let total = 1;
	(function helper(array) {
		if (array.length === 0) return;
		total *= array[0];
		return helper(array.slice(1));
	})(arr);
	return total;
}

export function recursiveRange(num) {
	if (num === 0) return 0;
	return num + recursiveRange(num - 1);
}

export function fibonacci(num) {
	if (num === 0) return 0;
	if (num === 1) return 1;
	return fibonacci(num - 1) + fibonacci(num - 2);
}

export function reverse(string) {
	let reversedStr = "";
	let i = string.length - 1;
	(function helper(str) {
		if (reversedStr.length === str.length) return;
		reversedStr += str[i];
		i--;
		return helper(str);
	})(string);
}

export function isPalindrome(string) {
	let reversedStr = "";
	let i = string.length - 1;
	(function helper(str) {
		if (reversedStr.length === str.length) return;
		reversedStr += str[i];
		i--;
		return helper(str);
	})(string);
}
