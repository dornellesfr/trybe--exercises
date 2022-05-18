array = [2, 3, 2, 5, 8, 2, 3];
let data = [];
array = array.sort();
let dataAll = [];

// [2,2,2,3,3,5,8];

function knowRepeated(arr) {
  for (let c in array) {
    if (c == 0) {
      data.push(array[c]);
    }
    else {
      if (array[c] == array[c - 1]) {
        data.push(array[c]);
      }
      else{
        dataAll.push(data);
        data = [];
        data.push(array[c]);
      }
    }
  }
  return dataAll
}

console.log(knowRepeated(array));
