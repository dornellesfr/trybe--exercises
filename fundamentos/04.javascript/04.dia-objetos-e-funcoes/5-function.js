array = [2, 3, 2, 5, 8, 2, 3];
let data = [];
array = array.sort();
let dataAll = [];


[2,2,2,3,3,5,8];

function knowRepeated(arr) {
  for (let c in array) {
    if (array[c] == array[0]) {
      data.push(array[c])
    }
    else {
      if (array[c] == array[c - 1]) {
        data.push(array[c])
      }
      else{
        dataAll = data
        data = [];
      }
    }
  }
}

console.log(knowRepeated(array));
