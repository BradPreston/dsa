// Binary only works on SORTED arrays
function search(sortedArr, value) {
	// O(log N)
	let left = 0;
	let right = sortedArr.length - 1;
	let middle = Math.floor((left + right) / 2);
	while (sortedArr[middle] !== value && left <= right) {
		value < sortedArr[middle] ? (right = middle - 1) : (left = middle + 1);
		middle = Math.floor((left + right) / 2);
	}
	return sortedArr[middle] === value ? middle : -1;
}

export default { search };
