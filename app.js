const  geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Los Angeles', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

forecast(34.0544, -118.2439, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
