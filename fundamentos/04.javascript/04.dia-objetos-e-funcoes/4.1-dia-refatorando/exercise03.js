const n1 = 35;
const n2 = 45;
const n3 = 36;
// let bigger = n1;


// if (bigger < n2) {
//   biggbger = n2;
// }

// else if (bigger < n3) {
//   bigger = n3;
// }

// console.log(`the biggest number is ${bigger}`);

function findBiggest(n1, n2, n3) {
  let biggest = n1
  if (biggest < n2) {
    biggest = n2;
  }
  else if(biggest < n3) {
    biggest = n3;
  }
  return biggest

}

console.log(findBiggest(n1, n2, n3))