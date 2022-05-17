const a1 = 10;
const a2 = 50;
const a3 = 100;
// ans = '';


// if (0 > a1 || 0 > a2 || 0 > a3) {
//   ans = 'error negative angle';
// }

// else if (a1 + a2 + a3 != 180) {
//   ans = false;
// }

// else if (a1 + a2 + a3 == 180) {
//   ans = true;
// }

// console.log(ans);

function knowAngle(a, b, c) {
  if (0 > a1 || 0 > a2 || 0 > a3) return 'error negative angle';  else if (a1 + a2 + a3 != 180) return false; else if (a1 + a2 + a3 == 180) return true;
  
}

console.log(knowAngle(a1, a2, a3));