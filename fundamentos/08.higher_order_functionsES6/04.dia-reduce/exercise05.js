const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const nomes = names.map((name) => name.toLowerCase());
  return nomes.reduce((acc, curr) => {
    curr = curr.split('');
    const arrayDeA = curr.filter((ele) => ele === 'a');
    return acc + arrayDeA.length;
  }, 0);
}

console.log(containsA());