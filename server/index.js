const express = require('express')
const cors = require('cors')
const path = require('path')
const euclid = require('./euclid')
const {getProp} = require('./utils/utilities')

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(cors({}))
app.use(express.static(path.join(__dirname, 'build')))

//        const data = await fetch(`http://localhost:3001/book/${book}/prop/${prop}`);

app.get('/book/:book/prop/:prop', (req, res) => {
  const propLocation = req.params;
  const prop = euclid['book' + req.params.book].propositions['prop' + req.params.prop]

  Object.assign(prop, {
    book: propLocation.book,
    proposition: propLocation.prop,
    citedBy: {
      props: getProp(prop.propsCitedBy),
    },
    cited: {
      props: getProp(prop.propsCited),
    },
  });

  res.send(prop);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "build", "/index.html"));
})

app.listen(PORT, () => {
  console.log('running on ' + PORT)
})