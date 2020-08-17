const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=d9cfc64eae721bc027d47923ee4cb095&query=45, -75&units=f'

const request = http.request(url, (response) => {

  let data = ''



 response.on('data', (chunk) => {
   data = data + chunk

  console.log(JSON.parse(chunk))
 })

 response.on('end', () => {
  
 })

request.on('error', (error) => {
  console.log('An error', error)
})

})

request.end()