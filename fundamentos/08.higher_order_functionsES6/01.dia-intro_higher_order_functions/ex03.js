const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correct = (a, b) => {
  let counterNote = 0;
  for (let c in a) {
    if (a[c] === b[c]) {
      counterNote += 1;
    } else if (b[c] === 'N.A'){
      counterNote += 0;
    } else {
      counterNote -= 0.5;
    }
  }
  return counterNote;
};

const note = (corr, verif, func) => {
  return func(corr, verif);
};

console.log(note(RIGHT_ANSWERS, STUDENT_ANSWERS, correct));