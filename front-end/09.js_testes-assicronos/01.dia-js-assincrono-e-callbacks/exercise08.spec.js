const { getPokemonDetails } = require('./exercise08')

// Verifique se a importação do arquivo correto está sendo feita.

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    
    function callback(error) {
        expect(error).toEqual(expectedError);
        done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'der', callback)
  });

  

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
  });
});