const path = require('path')
const express = require('express')
const hbs = require('hbs')

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
  res.send({
    forecast: 'It is extremely hot out',
    location: 'Alameda'
  })
})

app.listen(3000, () => {

  console.log('server running.... on port 3000')


})
