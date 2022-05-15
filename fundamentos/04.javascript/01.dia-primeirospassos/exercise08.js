const num1 = 23;
const num2 = 31;
const num3 = 2;
let ans = false;


if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    ans = 'This sequence have a even number';
}
else {
    ans = 'This sequence haven\'t a even number';
}

console.log(ans)
