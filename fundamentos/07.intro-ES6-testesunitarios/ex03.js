// Function 2
const biggestWord = (string) => {
  let biggest = 0;
  newString = string.split(' ');
  for (let c = 0; c < newString.length; c += 1) {
    if (c === 0) {
      biggest = newString[c];
    }
    else {
      if (newString[c].length > biggest.length) {
        biggest = newString[c];
      }
    }
  }
  return biggest;
}

console.log(biggestWord('Olá meu nome é'));