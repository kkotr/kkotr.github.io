// Current Location Scripts
(function () {

		var status = document.getElementById('status');

		(function getGeoLocation() {
				status.innerHTML = 'Getting Location...';
				if (navigator.geolocation) {
						navigator.geolocation.getCurrentPosition(function (position) {
								var lat = position.coords.latitude;
								var long = position.coords.longitude;

								// Call the getData function, send the lat and long
								getData(lat, long);

						});
				} else {
						status.text("Your browser doesn't support Geolocation or it is not enabled!");
				}

		}());

		function getJSON(url) {
				return fetch(url)
						.then(function (response) {
								return response.json();
						})
						.catch(function (error) {
								console.log(error);
						});
		}

		// Get the data from the wunderground API
		function getData(lat, long) {
			var url = "//api.wunderground.com/api/e248128fd8df41da/geolookup/conditions/q/" + lat + "," + long + ".json";
			//change this to the correct URL for wunderground
				getJSON(url).then(function (data) {
						console.log(data);
						//add the code necessary here to update the page with all of the correct data points.
					//stuff that should happen after the request is done.
					var temp = document.getElementById('currentTemp');
					temp.innerHTML = '';
					var summary = document.getElementById('summary');
					temp.innerHTML = '';
					var add1 = document.getElementById('add1');
					temp.innerHTML = '';
					var add2 = document.getElementById('add2');
					temp.innerHTML = '';
					var add3 = document.getElementById('add3');
					temp.innerHTML = '';
					var stat =  document.getElementById('status');
					temp.innerHTML = '';
					console.log(data.location.city);
					document.getElementById('cityDisplay').innerHTML = data.location.city + ', ' + data.location.state;
					temp.innerHTML = data.current_observation.temp_f + '&nbsp;&deg;F';
					summary.innerHTML = data.current_observation.weather;
					add3.innerHTML = 'Wind Speed (MPH): ' + data.current_observation.wind_mph;
					add1.innerHTML = 'Heat Index is: ' +  data.current_observation.heat_index_f;
					add2.innerHTML = 'Precipitation: ' + data.current_observation.precip_today_string;
					document.getElementById('update').innerHTML = '';
					document.getElementById('update').innerHTML = data.current_observation.observation_time;
				});


						//this line will cause the Loading message to fade away.
						document.getElementById("cover").classList.add('fadeout');

				};

		// A function for changing a string to TitleCase
		function toTitleCase(str) {
				return str.replace(/\w+/g, function (txt) {
						return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
		}
}());
