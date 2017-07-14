
//helper function to fetch the data from an external source
function getJSON(url) {
	return fetch(url)
		.then(function (response) {
		return response.json();
	})
		.catch(function (error) {
		console.log(error);
	});
}
//lets catch some pokemon
function dictionary() {
	var url = "/kkotr.github.io/final_karate.json"";
	//call getJSON function to get the list of pokemon from the api
	getJSON(url).then(function (data) {
		//stuff that should happen after the request is done.
		console.log(data);
		var pokeList = document.getElementById('list');
		pokeList.innerHTML = '';
		data.results.forEach(function (poke) {
			console.log(pokemon);
			var pokeName = document.createElement('li');
			pokeName.innerHTML = poke.dictionary.word + ' means: ' + poke.dictionary.meaning;
			pokeList.appendChild(pokeName);
		})
	});
}
