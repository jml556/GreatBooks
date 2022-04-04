const express = require('express')
const path = require('path')
const euclid = require('./euclid')

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))

app.get('/book/:book/prop/:prop', (req, res) => {
  const propLocation = req.params;
  const prop = euclid['book' + req.params.book].propositions['prop' + req.params.prop]
  const props = prop.propsCitedBy
  const citedProps = props.propsCited
  Object.assign(prop, {
    book: propLocation.book,
    proposition: propLocation.prop,
    citedBy: {
      props: props,
    },
    cited: {
      props: citedProps,
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