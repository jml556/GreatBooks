function getBookAndProp(obj) {
  const {book, prop} = obj
  return {book: book.split('book')[1], prop: prop.split('prop')[1]}
}

const getData = async () => {try {
    const response = await fetch('http://localhost:4000/book/2/prop/3')
    const data = await response.json()
    console.log(data)
  }

  catch(e) {
    console.log(e, 'data could not be fetched')
  }
}

module.exports = getBookAndProp

