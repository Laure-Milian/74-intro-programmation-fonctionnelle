
function divide(n) {
	return n / 2;
}

function compose(fonction, tableau) {
	return tableau.map(fonction);
};

console.log(compose(divide, [1,2,3]));


