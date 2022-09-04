// window -> pai de todos em Dom
// árvore do DOM = window -> document -> html -> head -> body
// pai --> filho(child)


// For in -> Lê os índices ou chaves do objeto
const frutas = ['Pêra', 'Maçã', 'Uva']; // array

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let i in frutas) { // leitura dos índices
    console.log(i);
}

for (let i in frutas) { 
    console.log(frutas[i]);
}

const pessoa = { // Objeto
    nome: 'Luciano',
    sobrenome: 'Costa',
    idade: 41
};
console.log(pessoa.nome); // pega somente o elemento desejado
console.log(pessoa['nome']); // pega o elemento desejado por array


for (let i in pessoa) { 
console.log(i, pessoa[i]);
}
