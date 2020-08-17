const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



// const url = 'http://api.weatherstack.com/current?access_key=d9cfc64eae721bc027d47923ee4cb095&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
 
//     if(error){
//       console.log("unable to connect to weather service. Please try again")
//     } else if (response.body.error){
//       console.log('Unable to find location')
//     } else {
//       console.log('It is '+ response.body.current.weather_descriptions[0] +'out ' + '.Its currently' + '  ' + response.body.current.temperature + ' ' + 'But it feels like' + ' ' + response.body.current.feelslike + ' ' + 'out.' )
//     }
        
//   }

// //   // console.log(response.body.current)
// //   // it's currently temp out. it feel likes temp out -- test your work
// )

// const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoia2VycnlzZnMiLCJhIjoiY2tkcXgxM20wMXM3cTJ0cGVnbmlwZ3g1aiJ9.UAw7PVl9wA7MKuG04VgDcQ'

// request({ url: mapBoxUrl, json: true }, (error, response) => {

//  if(error){
//    console.log('Unable to connect to location services')
 
// } else if (response.body.features.length === 0) {
//   console.log('Unable to find location, try another search')

// } else {
//   const latitude = response.body.features[0].center[1]
//   const longitude = response.body.features[0].center[0]

//   console.log(latitude, longitude)
//  }
 
// })








let cityName = process.argv[2]

if(!cityName){
  console.log('Please provide a city NAME')
} else {
  geocode(cityName, (error, { location, latitude, longitude } = {} ) => {


    if(error){
     return console.log(error)
    }
  
  
    forecast(latitude, longitude, (error, forecastData) => {
        if(error){
          return console.log(error)
        }
  
      console.log(location)
      console.log(forecastData)
    })
  
  })
}




//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

