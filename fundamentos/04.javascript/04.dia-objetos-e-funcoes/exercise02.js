let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
    titulo: 'O Pior Dia de Todos',
    autor: 'Daniela Kopsch',
    editora: 'Tordesilhas',
    },
  ],
};

let name = leitor['nome'];
let sobrenome = leitor['sobrenome'];
let titulo = leitor['livrosFavoritos'][0]['titulo']

console.log(`O livro favorito de ${name} ${sobrenome} se chama \'${titulo}\'`);

leitor['livrosFavoritos'].push(
  {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
  },
)
  
let numDeFavoritos = leitor['livrosFavoritos'].length

console.log(`${name} tem ${numDeFavoritos} livros favoritos`)