var salary = 1500.10;
let impostINSS;
let impostRent;
let aliquotRent;

if (salary < 0) {
    console.log('error type a salary available');
}
else if (salary > 0 && salary <= 1556.94) {
    impostINSS = 8;
}
else if (salary > 1556.94 && salary <= 2594.92) {
    impostINSS = 9;
}
else if (salary > 2594.92 && salary <= 5189.82) {
    impostINSS = 11;
}
else if (salary > 5189.82) {
    impostINSS = 570.88;
}
if (salary < 5189.82) {
    newSalary = salary * (1 - (impostINSS / 100))
}
// IR - IMPOSTO DE RENDA:
if (newSalary < 0) {
    console.log('try again')
}
else if (newSalary > 0 && newSalary <= 1903.98) {
    impostRent = 0
}
else if (newSalary > 1903.98 && newSalary > 2826.65) {
    impostRent = 142.80
    aliquotRent = 7.5
}
else if (newSalary < 1903.98) {
    impostRent = 142.80
    aliquotRent = 7.5
}