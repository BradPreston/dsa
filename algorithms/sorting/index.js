// https://www.toptal.com/developers/sorting-algorithms

// quadratic
export function bubbleSort(arr) {
	// best O(N) worst O(N^2)
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				noSwaps = false;
			}
		}
		if (noSwaps === true) break;
	}
	return arr;
}

// quadratic
export function selectionSort(arr) {
	// O(N^2)
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (!arr[j]) break;
			if (arr[j] < arr[min]) min = j;
		}
		if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
	}
	return arr;
}

// quadratic
export function insertionSort(arr) {
	// O(N^2)
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
			arr[j] = currentVal;
		}
	}
	return arr;
}

function merge(arr1, arr2) {
	const results = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
}

export function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

function pivot(arr, start = 0, end = arr.length - 1) {
	const swap = (arr, idx1, idx2) =>
		([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

	let pivot = arr[start];
	let swapIndex = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
}

export function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		// left
		quickSort(arr, left, pivotIndex - 1);
		// right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
const digitCount = (num) =>
	num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
function mostDigits(arr) {
	let largestDigit = 0;
	for (let digit of arr) {
		largestDigit = Math.max(largestDigit, digitCount(digit));
	}
	return largestDigit;
}

export function radixSort(arr) {
	const end = mostDigits(arr);
	for (let k = 0; k < end; k++) {
		let bucketArr = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < arr.length; i++) {
			let digit = getDigit(arr[i], k);
			bucketArr[digit].push(arr[i]);
		}
		arr = [].concat(...bucketArr);
	}
	return arr;
}
