
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
var poke = document.getElementById('list')
//lets catch some pokemon
function catchPokemon() {
	var url = "//pokeapi.co/api/v2/pokemon/";
	//call getJSON function to get the list of pokemon from the api
	getJSON(url).then(function (data) {
		//stuff that should happen after the request is done.
		console.log(data);
		var pokemonList = document.getElementById('list');
		pokemonList.innerHTML = '';
		data.results.forEach(function (pokemon) {
			console.log(pokemon);
			var pokemonName = document.createElement('li');
			var link = document.createElement('a');
			link.setAttribute('href', pokemon.url);
			link.innerHTML = pokemon.name;
			link.addEventListener('click', function(event){
			event.preventDefault();
			getPokemonDetails(pokemon.url);
			});
			pokemonName.appendChild(link);
			pokemonList.appendChild(pokemonName);
			})
		});
	}
function getPokemonDetails(url){
	getJSON(url).then(function (data) {
		console.log(data);
		var detailsList = document.getElementById('output');
		detailsList.innerHTML = '';
			var stuff = '';
		var teep = '';
		var i = 0;
		var step = 0;
		for(var i = 0; i < data.types.length; i++){
				teep += data.types[step].type.name + ' ';
			step++;
		}

		stuff = 'Name: ' + data.species.name;
		stuff += '<br>Type: ' + teep;
		console.log(stuff);
		detailsList.innerHTML = stuff;

		var x = document.createElement("IMG");
		x.setAttribute("src", data.sprites.front_default);
		x.setAttribute("width", "100");
		x.setAttribute("height", "100");
		x.setAttribute("alt", "Pokemon");
		detailsList.appendChild(x);

		var y = document.createElement("IMG");
		y.setAttribute("src", data.sprites.front_shiny);
		y.setAttribute("width", "100");
		y.setAttribute("height", "100");
		y.setAttribute("alt", "Pokemon");
		detailsList.appendChild(y);





		})
	}
//Group: Zoe Miner & Kienen Kotter
