const retObj = (nome) => {
  let email = nome;
  email = `${email}@trybe.com`;
  return {
    nomeCompleto: nome,
    email: email,
  }
};

const newEmployees = () => {
  const employees = {
    id1: retObj('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: retObj('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: retObj('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};