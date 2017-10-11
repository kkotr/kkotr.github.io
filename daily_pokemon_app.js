var image = [ "/pictures/Arbok.png",
							"/pictures/Articuno.png",
							"/pictures/blastiose.png",
							"/pictures/Bulbasaur.png",
							"/pictures/Caterpie.png",
							"/pictures/Charmander.png",
							"/pictures/Charzard(1).png",
							"/pictures/Charzard.png",
							"/pictures/Evee.png",
							"/pictures/Gengar.png",
							"/pictures/Haunter.png",
							"/pictures/jolteon.png",
							"/pictures/Lapras.png",
							"/pictures/Mew%20two.png",
							"/pictures/pikachu.png",
							"/pictures/Sandshrew.png",
							"/pictures/Sandslash.png",
							"/pictures/Squirtle.png",
							"/pictures/Vaporeon(1).png",
							"/pictures/Vaporeon.png",
							"/pictures/Zapdos.png"];
function catchPokemon(){
var num1 = Math.round(Math.random()*21);
var vault = image[num1].valueOf();
	console.log(vault);
	var x = document.getElementById("pokeman");
	x.setAttribute("src", vault);
	x.setAttribute("width", "100%");
	x.setAttribute("height", "100%");
	x.setAttribute("alt", "Pokemon");
};
