// For clássico -> Geralmente com iteráveis (array ou string)
// For in -> Retorna o índice ou chave (string, array ou objeto)
// For of -> Retorna o valor em si (iteráveis, arrays ou strings)

const nome = 'Luciano Costa';

for (let i = 0; i < nome.length; i++) { // fazendo iteração
    console.log(nome[i]);

}

for (let i in nome) { // Feito com for in
    console.log(nome[i]);
}

for (let valor of nome) {  // Feito com for of
    console.log(valor);
}

const nome1 = ['Luciano', 'Rodrigues', 'Costa']; // Utilizando array

console.log('################## - Abaixo Usando o for');

for (let i = 0; i < nome1.length; i++) { // fazendo iteração
    console.log(nome1[i]);

}
console.log('################## - Abaixo Usando o for of');

for (let valor of nome1) {  // Feito com for of, Fazendo através de array
    console.log(valor);
}
console.log('################## - Abaixo Usando for in');

for (let i in nome1) { // Feito com for in
    console.log(nome1[i]);
}

console.log('################## - Abaixo Usando forEach');

nome1.forEach(function(valor, indice, array) { // Você pode usar o valor, indice, array ...
    console.log(valor, indice, array);
});

const pessoa = { // Utiizando for in para objeto
    nome: 'Luciano',
    sobrenome: 'Costa'
};

console.log('################## - Abaixo Usando o for in para Objeto');
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}