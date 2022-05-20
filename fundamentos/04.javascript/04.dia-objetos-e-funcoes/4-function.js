let ARray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Adalberto'];
let biggest = 0;
let big = 0;


function showBiggest (array){
  for (let i in array) {
    if (i == 0) {
      biggest = array[i].length
      big = array[i]
    }
    else {
      if (array[i].length > biggest) {
        big = array[i]
        biggest = array[i].length
      }
    }
  }
  return big
}

console.log(showBiggest(ARray))