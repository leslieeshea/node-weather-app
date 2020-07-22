const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=ade2d7d0f31c35ad7696fc5fc725ca9c&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  const currentTemp = response.body.current.temperature;
  const feelsLike = response.body.current.feelslike;
  const weatherDescription = response.body.current.weather_descriptions[0];

  console.log(weatherDescription + '. It is currently '  + currentTemp + ' degrees out. It feels like ' + feelsLike + ' degrees out.');
  // console.log(response.body.current);
});
