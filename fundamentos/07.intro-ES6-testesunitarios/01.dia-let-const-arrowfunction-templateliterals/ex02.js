// Function 1
const factorial = (num) => {
  let ans = 1;
  for (let c = num; c >= 1; c -= 1) {
    ans *= c;
  }
  return ans;
}

console.log(factorial(5));
