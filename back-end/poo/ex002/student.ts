// Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.
type nota = [number, number, number, number];
type trabalho = [number, number];

class Student {
  private _matricula: number;
  private _nome: string;
  private _notas: nota;
  private _trabalho: trabalho;

  constructor(matricula: number, nome: string, notas: nota, trabalho: trabalho) {
    this._matricula = matricula;
    this._nome = nome;
    this._notas = notas;
    this._trabalho = trabalho;
  }

  get matricula() { return this._matricula };
  get nome() { return this._nome };
  get notas() { return this._notas };
  get trabalho() { return this._trabalho };

  public mediaNotas() {
    let notaSoma = 0;
    this.notas.forEach((nota) => {
      notaSoma += nota;
    });
    const notaMedia = notaSoma / this.notas.length;
    return notaMedia;
  }

  public somaNotas() {
    let notaSoma = 0;
    this.notas.forEach((nota) => {
      notaSoma += nota;
    });
    return notaSoma;
  }
}

// const personOne = new Student(202001011, 'Maria da Silva', [ 2, 2, 4, 4], [1, 2]);

// console.log(personOne.mediaNotas());

// const personTwo = new Student('202001012', 'João da Silva');

// console.log(personTwo);
