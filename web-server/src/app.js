const path = require('path')

const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')




app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
  res.send('<h1>Weather</h1>')
})
app.get('/help', (req, res) => {
  res.send([{
    name: "Kerry"
  },
    {
      age: 35
    },
    {
      sex: 'male'
    }
  ])
})
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is extremely hot out',
    location: 'Alameda'
  })
})

app.listen(3000, () => {

  console.log('server running.... on port 3001')


})
