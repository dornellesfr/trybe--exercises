const random = () => Math.floor(Math.random() * (6 - 1) + 1);

const sorteio = (num) => {
  const sorteado = random();
  if (num === sorteado) return `O número sorteado foi ${sorteado}! 
Parabéns você venceu!`;
  return `O número sorteado foi ${sorteado}! 
Tente novamente!`;
};

console.log(sorteio(3));