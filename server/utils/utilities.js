const euclid = require('../euclid')

function fromRomanNumeral(string) {
  const propName = string;
  if (
    !propName.indexOf("Def") ||
    !propName.indexOf("C.N") ||
    !propName.indexOf("Post")
  ) {
    return false;
  }
    
  bookNumStr = propName.substring(0, propName.indexOf("."));
  ret = 0;
  while (bookNumStr.length > 0) {
    if (bookNumStr.charAt(bookNumStr.length - 1) == "I") {
      ret++;
      bookNumStr = bookNumStr.substring(0, bookNumStr.length - 1);
    } else if (bookNumStr.charAt(bookNumStr.length - 1) == "V") {
      ret += 5;
      bookNumStr = bookNumStr.substring(0, bookNumStr.length - 1);
      if (
        bookNumStr.length > 0 &&
        bookNumStr.charAt(bookNumStr.length - 1) == "I"
      ) {
        ret--;
        bookNumStr = bookNumStr.substring(0, bookNumStr.length - 1);
      }
    } else if (bookNumStr.charAt(bookNumStr.length - 1) == "X") {
      ret += 10;
      bookNumStr = bookNumStr.substring(0, bookNumStr.length - 1);
      if (
        bookNumStr.length > 0 &&
        bookNumStr.charAt(bookNumStr.length - 1) == "I"
      ) {
        ret--;
        bookNumStr = bookNumStr.substring(0, bookNumStr.length - 1);
      }
    }
  }
  propNum = propName.substring(propName.indexOf(" "));
  return [ret, parseInt(propNum.trim())];
}

function getProp(arr) {
  const propsCitedByArr = arr;
  return propsCitedByArr.map((prop) => {
    if (fromRomanNumeral(prop) === false) {
      return "";
    } else {
      const [bookNum, propNum] = fromRomanNumeral(prop);
      return euclid["book" + bookNum].propositions["prop" + propNum];
    }
  });
}

module.exports = {fromRomanNumeral, getProp}
