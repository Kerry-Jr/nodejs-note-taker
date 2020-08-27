const name = 'Kerry'
const userAge = 35

const user = {
  name: name,
  age: userAge,
  location: 'California'
}

console.log(user)


const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

const transaction = (type, { label = 'item', stock = 0 } = {} ) => {
  console.log(type, label, stock)
}


transaction('order', product)

// transaction('order', product)
