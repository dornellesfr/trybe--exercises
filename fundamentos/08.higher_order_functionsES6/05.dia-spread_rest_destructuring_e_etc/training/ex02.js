const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const obj = {...user, ...jobInfos};

console.log(obj);

const { name, nationality } = user;
const { profession, squad, squadInitials } = jobInfos;

console.log(`HI, my name is ${name}, I'm ${nationality}. I work as ${profession} and my squad is ${squadInitials}-${squad}`)