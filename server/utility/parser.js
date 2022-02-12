//File for potential utility functions
function getBookAndProp(obj) {
  const { book, prop } = obj;
  return { book: book.split("book")[1], prop: prop.split("prop")[1] };
}

module.exports = getBookAndProp;
