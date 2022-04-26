function formatData(arr) {
  const formattedArr = arr.slice().map((item) => {
    const newArr = item.split("");

    return newArr.join("");
  });

  function getCountForBooks(arr) {
    const obj = {};
    arr.forEach((item) => {
      const arr = item.split(".");
      if (!obj[arr[0]]) {
        obj[arr[0]] = 0;
      }
      obj[arr[0]]++;
    });
    return obj;
  }

  return getCountForBooks(formattedArr);
}

function displayNodes(arr) {
  const formattedArr = arr.slice().map((item) => {
    const newArr = item.split("");

    return newArr.join("");
  });
  return formattedArr
}

function getDataForCharts(arr) {
  const data = Object.entries(formatData(arr))
  .map((item) => {
    return {
      x: item[0],
      y: item[1],
    };
  })
  .sort((a, b) => a.y - b.y);

  return data
}

module.exports = {
  formatData,
  displayNodes,
  getDataForCharts
}