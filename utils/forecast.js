const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=ade2d7d0f31c35ad7696fc5fc725ca9c&query=' + latitude + ',' + longitude + '&units=f';

  request({ url: url, json: true }, (error, response) => {
    if(error) {
      callback('Unable to connect to weather service.');
    } else if(response.body.error) {
      callback('Unable to find location. Please try again.');
    } else {
      const currentTemp = response.body.current.temperature;
      const feelsLike = response.body.current.feelslike;
      const weatherDescription = response.body.current.weather_descriptions[0];
      
      callback(undefined, weatherDescription + '. It is currently '  + currentTemp + ' degrees out. It feels like ' + feelsLike + ' degrees out.');
    }
  });
}

module.exports = forecast;
