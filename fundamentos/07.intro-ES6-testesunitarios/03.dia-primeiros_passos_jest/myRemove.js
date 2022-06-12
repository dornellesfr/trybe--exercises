const myRemove = (arr, item) => {
  newArr = []
  for (let c in arr) {
    if (arr[c] !== item) {
      newArr.push(arr[c])
    }
  }
  return newArr;
}

module.exports = myRemove;