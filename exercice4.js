
function add2(numbers) {
	return numbers.map(function(n) {
		return n + 2;
	});
}

console.log(add2([1,2,3]));