const request = require('request')

const forecast = (latitude, longitude, callback) => {

  const url = 'http://api.weatherstack.com/current?access_key=d9cfc64eae721bc027d47923ee4cb095&query= ' + latitude + ',' + longitude + '&units=f'


 

  request({ url, json: true }, (error, { body }) => {

   

    if(error){
      callback('Unable to connect to weather service', undefined)
    } else if (body.error){
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, 'It is '+ body.current.weather_descriptions[0] +' out ' + '.Its currently' + '  ' + body.current.temperature + ' ' + 'But it feels like' + ' ' + body.current.feelslike + ' ' + 'out.')
    }

  })



}

module.exports = forecast