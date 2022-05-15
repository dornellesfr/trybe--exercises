const num1 = 22;
const num2 = 0;
const num3 = 2;
let ans = false;


if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    ans = 'This sequence have a odd number';
}
else {
    ans = 'This sequence have not a odd number';
}

console.log(ans)
