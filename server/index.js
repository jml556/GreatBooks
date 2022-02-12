const express = require('express')
const euclid = require('./public/data')
const getBookAndProp = require('./utility/parser')
const path = require('path')

const PORT = 4000

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', '/index.html'));
})

//REST api handler for book and prop
app.get('/book/:book/prop/:prop', (req, res) => {
  const propLocation = req.params
  const prop = euclid['book' + propLocation.book]['prop' + propLocation.prop]
  Object.assign(prop, {'book': propLocation.book, 'proposition': propLocation.prop})

  res.json(prop)
})

//listen on localhost with PORT 
app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`)
})