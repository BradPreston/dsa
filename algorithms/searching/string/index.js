function countSubstringsNaive(string, pattern) {
	let totalMatches = 0;
	for (let i = 0; i < string.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
			if (string[i + j] !== pattern[j]) break;
			if (j === pattern.length - 1) totalMatches++;
		}
	}
	return totalMatches;
}

export default { countSubstringsNaive, countSubstring };
