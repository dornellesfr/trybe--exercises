let finalNote = 'reprovado';

switch (finalNote) {
  case 'aprovado':
    console.log('Você foi aprovado!');
    break;
  case 'lista':
    console.log('Você está de recuperação');
    break;
  case 'reprovado':
    console.log('Você foi reprovado');
    break;
  default:
    console.log('Não se aplica');

}