// alert('CONNECTED')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log( data)
//   })
// })

// fetch('http://localhost:3000/weather?address=Alameda').then((response) => {
//   response.json().then((data) => {
//     if(data.error){
//       console.log(data.error)
//     } else {
//       console.log(data.location)
//       console.log(data.forecast)
//     }
//   })
// })

const weatherFrom = document.querySelector('form')

const search = document.querySelector('input')

weatherFrom.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value

  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if(data.error){
        console.log(data.error)
      } else {
        console.log(data.location)
        console.log(data.forecast)
      }
    })
  })





})

