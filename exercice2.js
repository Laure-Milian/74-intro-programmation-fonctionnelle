
function getMoyenne(tableau) {
	return tableau.reduce(function(memo, val) {
		return (memo + val);
	}) / tableau.length;
}

console.log(getMoyenne([1, 2, 3, 4]));