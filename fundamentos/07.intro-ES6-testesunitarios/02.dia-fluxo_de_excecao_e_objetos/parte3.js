const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const nightLesson2 = (turn) => turn['turno'] = 'noite';
// nightLesson2(lesson2);
// console.log(lesson2);


// const listObjectKeys = (obj) => Object.keys(obj);
// console.log(listObjectKeys(lesson2))


// const len = (obj) => Object.keys(obj).length;
// console.log(len(lesson2));


// const listObjectValues = (obj) => Object.values(obj);
// console.log(listObjectValues(lesson2));


// let allLessons = Object.assign({}, {lesson1: lesson1}, {lesson2: lesson2}, {lesson3: lesson3});
// console.log(allLessons);


// const allStudents = () => parseInt(allLessons.lesson1.numeroEstudantes) + parseInt(allLessons.lesson2.numeroEstudantes) + parseInt(allLessons.lesson3.numeroEstudantes);
// console.log(allStudents(allLessons));


// const getValueByNumber = (lesson, num) => Object.values(lesson)[num];
// console.log(getValueByNumber(lesson1, 0));


const verifyPair = (obj, nome, value) => {
  let ans = false;
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  if (obj.nome.keys === value && obj.nome.value)
}

console.log(verifyPair(lesson3, 'turno', 'noite'));