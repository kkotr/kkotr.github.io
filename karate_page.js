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

//function getData (){
//	var url = "final_karate.json";
//getJSON(url).then(function (data){
//	console.log(data);
//	displayDetails();
//});
//}
//lets catch some pokemon
function dictionary() {
	var url = "final_karate.json";
	getJSON(url).then(function (data){
		console.log(data);
		var pokeList = document.getElementById('list');
		pokeList.innerHTML = '';
		data.dictionary.forEach(function (poke) {
			console.log(poke);
			var pokeName = document.createElement('li');
			pokeName.innerHTML = poke.word + ' means: ' + poke.meaning;
			pokeList.appendChild(pokeName);
		});
	})
	}
function events() {
	var url = "final_karate.json";
	getJSON(url).then(function (data){
		console.log(data);
		var pokeList = document.getElementById('list');
		pokeList.innerHTML = '';
		data.events.forEach(function (poke) {
			console.log(poke);
			var pokeName = document.createElement('li');
			pokeName.innerHTML = pokeName.innerHTML = poke.title + ' is ' + poke.date;
			pokeList.appendChild(pokeName);
		});
	})
}
