// Funções contrutoras retornam objetos
// Funções fabrica retornamm objetos
// Na função construtora -> Sempre inicia com letra maiuscula: Pessoa(new) // new Pessoa

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': Sou um método');
    }
}

const p1 = new Pessoa('Luciano', 'Costa');
const p2 = new Pessoa('Tati', 'COsta');

p1.metodo();
p2.metodo();