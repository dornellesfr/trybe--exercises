// Function 3
const changeX = (string) => {
  let s = 'Tyber x aqui!';
  newString = s.split(' ');
  for (let c in newString) {
    if (newString[c] === 'x') {
      newString[c] = string;
    }
  }
  return newString.join(' ');
}

const skills = ['CCS', 'JavaScript', 'HTML', 'Flexbox', 'Python'];

const func = (foo) => {
  let arr = [];
  let text = `${foo}
Minhas principais habilidades são: `
  for (let c in skills) {
    arr.push(`\n - ${skills[c]}`);
  }
  let trybe = '\n #goTrybe';
  arr.join(' ');
  return text + arr + trybe;
}

console.log(func(changeX('Fernando')));