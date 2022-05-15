const noteStudent = 110;

if (noteStudent >= 80 && noteStudent < 100) {
  console.log("Parabéns, você foi aprovado(a)!");
}
else if (noteStudent < 60 && noteStudent > 0) {
  console.log('Você foi reprovado!');
}
else if (noteStudent >= 60 && noteStudent < 80) {
  console.log('Você está na nossa lista de espera');
}
else {
  console.log('O valor digitado não foi encontrado');
}