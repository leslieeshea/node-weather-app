const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=ade2d7d0f31c35ad7696fc5fc725ca9c&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  const currentTemp = response.body.current.temperature;
  const feelsLike = response.body.current.feelslike;

  console.log('It is currently '  + currentTemp + ' degrees out. It feels like ' + feelsLike + ' degrees out.');
  // console.log(response.body.current);
});
