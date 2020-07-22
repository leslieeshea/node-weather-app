const request = require('request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibC1zaGVhIiwiYSI6ImNrY3dtZ3d5cDAxYjkydXFpc2dnN2o5ZGcifQ.Pfs0m0H32TOyRAo6dxljMQ&limit=1';

  request({ url: url, json: true }, (error, response) => {
    if(error) {
      callback('Unable to connect to location services.');
    } else if(response.body.features.length === 0) {
      callback('Unable to find location. Please try again.');
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
}
