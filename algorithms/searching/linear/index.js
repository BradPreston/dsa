// Linear search: check values in an array one by one

// LinearSearch has a time complexity of O(N)
function search(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) return i;
	}
	return -1;
}

export default { search };
