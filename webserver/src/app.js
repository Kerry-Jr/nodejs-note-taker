const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()


//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handle-bars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Kerry Smith'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Kerry Smith'
  })
})


app.get('/help', (req, res) => {
  res.render('help', {
    message: 'This message is provided to help you. Nothing more nothing less!',
    title: 'Help Page',
    name: 'Kerry Smith'
  })
})


app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Please enter in a valid city name.'
    })
  }

  geocode(req.query.address, (error, {latitude, longitude, location } = {} ) => {
    if(error) {
      return res.send({ error })
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if(error) {
        return res.send({ error })
      }
      res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      })
    })
  })


  // console.log(req.query.address)
  // res.send({
  //   forecast: "It's hotter than hell outside",
  //   location: 'California',
  //   address: req.query.address
  // })


})


app.get('/help/*', (req, res) => {
  res.render('error', {
    title: '404',
    name: 'Kerry',
    errorMessage: 'The help article does not exist. Please try again'
  })
})

app.get('/products', ((req, res) => {

  if (!req.query.search) {
       return res.send({
          error: 'You must provide a search term!'
        })
  }
  console.log(req.query.search)
  res.send({
    products: []
  })
}))


app.get('*', (req, res) => {
  res.render('error', {
    title: '404',
    name: 'Kerry',
    errorMessage: 'Page not FOUND!'
  })
})


app.listen(3000, () => {

  console.log('server running.... on port 3000')


})
