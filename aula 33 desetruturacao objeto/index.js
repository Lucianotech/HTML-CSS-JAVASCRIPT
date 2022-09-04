const pessoa = {
 nome:'Luciano',
 sobrenome: 'Costa',
 idade: 41,
 endereco: {
     rua: 'Av. Brasil',
     numero: 320
 }
};

console.log(pessoa.nome);// imprimindo direto

//const nome = pessoa.nome;// atribuindo a uma variável
//console.log(nome);

const { nome, sobrenome, idade } = pessoa;// Atribuição via desestruturação
console.log(nome, sobrenome, idade );