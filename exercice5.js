function filterByCountry(users, condition) {
	return users.filter(function(user) {
		return user.country == condition;
	});
}

var users = [
  { name: 'Pierre', country: 'France' },
  { name : 'Peter', country: 'England' },
  { name: 'Pedro', country: 'Spain' }
]

console.log(filterByCountry(users, 'France'));