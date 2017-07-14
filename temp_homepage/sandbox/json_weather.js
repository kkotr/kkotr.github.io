
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
var loc = document.getElementById('location')
var tem = document.getElementById('temp')
var mess = document.getElementById('message')

function catchPokemon() {
	var url = "/temp_homepage/weather_website/weather.json/weather.json/";
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


	})
}
//Group: Zoe Miner & Kienen Kotter


jQuery(document).ready(function($) {
	$.ajax({
		url : "http://api.wunderground.com/api/e248128fd8df41da/geolookup/conditions/q/IA/Cedar_Rapids.json",
		dataType : "jsonp",
		success : function(parsed_json) {
			var location = parsed_json['location']['city'];
			var temp_f = parsed_json['current_observation']['temp_f'];
			alert("Current temperature in " + location + " is: " + temp_f);
		}
	});
});
