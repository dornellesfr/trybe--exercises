array = [1, 3, 23, 77, 10, 1];
let biggest = 0;
let big = 0;

function showBiggest (array) {
  for (let i in array) {
    if (i == 0) {
      biggest = i
      big = array[i]
    }
    else {
      if (array[i] > big) {
        big = array[i]
        biggest = i
      }
    }
  }
  return biggest
}

console.log(showBiggest(array));
