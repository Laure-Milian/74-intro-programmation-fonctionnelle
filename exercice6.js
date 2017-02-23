
function countWords(words) {
	let result = {};
	words.reduce(function(words, currentWord) {
		if (!result[currentWord]) {
			result[currentWord] = 1;
		} else {
			result[currentWord] = result[currentWord] + 1;
		};
	}, []);
	return result;
}

var words = ['Apple', 'Banana', 'Apple', 'Kiwi', 'Kiwi', 'Kiwi']

console.log(countWords(words))
