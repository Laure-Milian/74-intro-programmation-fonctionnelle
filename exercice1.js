function add(x) {
	return function add(y) {
		return x + y;
	}
}
console.log(add(3)(5));