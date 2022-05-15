var salary = 3589.55;
let impostINSS;
let impostRent;
let aliquotRent;
let liquidSalary;
let newSalary;
let percent;
let rentTributs;


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
if (salary <= 5189.82 && salary > 0) {
    newSalary = salary * (1 - (impostINSS / 100));
}
else if(salary > 5189.82) {
    newSalary = salary - impostINSS;
}


// IR - IMPOSTO DE RENDA:
if (newSalary < 0) {
    console.log('try again');
}
else if (newSalary > 0 && newSalary <= 1903.98) {
    impostRent = 0;
}
else if (newSalary > 1903.98 && newSalary <= 2826.65) {
    impostRent = 142.80;
    aliquotRent = 7.5;
}
else if (newSalary > 2826.65 && newSalary <= 3751.05) {
    impostRent = 354.80;
    aliquotRent = 15;
}
else if (newSalary > 3751.05 && newSalary <= 4664.68) {
    impostRent = 636.13;
    aliquotRent = 22.5;
}
else if (newSalary > 4664.68) {
    impostRent = 869.36;
    aliquotRent = 27.5;
}

if (newSalary > 0 && newSalary <= 1903.98)  {
    liquidSalary = newSalary;
}
else if (newSalary > 1903.08) {
    percent = newSalary * (aliquotRent / 100);
    rentTributs = percent - impostRent;
    liquidSalary = newSalary - rentTributs;
}


console.log(liquidSalary);

//3194.6995

//479.204925 - aliq

// 124,404925