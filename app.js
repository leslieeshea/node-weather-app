const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=ade2d7d0f31c35ad7696fc5fc725ca9c&query=37.8267,-122&units=f';

// request({ url: url, json: true }, (error, response) => {
//   if(error) {
//     console.log('Unable to connect to weather service.');
//   } else if(response.body.error) {
//     console.log('Unable to find location.');
//   } else {
//     const currentTemp = response.body.current.temperature;
//     const feelsLike = response.body.current.feelslike;
//     const weatherDescription = response.body.current.weather_descriptions[0];

//     console.log(weatherDescription + '. It is currently '  + currentTemp + ' degrees out. It feels like ' + feelsLike + ' degrees out.');
//   }
// });

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibC1zaGVhIiwiYSI6ImNrY3dtZ3d5cDAxYjkydXFpc2dnN2o5ZGcifQ.Pfs0m0H32TOyRAo6dxljMQ&limit=1';

request({ url: geocodeURL, json: true}, (error, response) => {
  if(error) {
    console.log('Unable to connect to location service.');
  } else if(response.body.features.length === 0) {
    console.log('Unable to find location. Please try again.');
  } else {
    const long = response.body.features[0].center[0];
    const lat = response.body.features[0].center[1];

    console.log(lat, long);
  }
});
