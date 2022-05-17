const n1 = 23;
const n2 = 24;

// if (n1 > n2) {
//   console.log(`first number is bigger than second and that is ${n1}`);
// }

// else if (n2 > n1) {
//   console.log(`second number is bigger than first and that is ${n2}`);
// }

// else {
//   console.log(`They\'re(${n1} and ${n2}) the same number`);
// }

function comparatorNumber(a, b) {
  if (a > b) {
    return 'the first number is bigger than second';
  }
  else if (a < b) {
    return 'the second number is bigger than first';
  }
    return 'the numbers are equal';
}

console.log(comparatorNumber(n1, n2));

