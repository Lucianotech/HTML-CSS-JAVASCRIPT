// nomes.splice(indice, delete, elem1, elem2, elem3);
//               -4         -3        -2      -1     
//                0          1         2       3
const nomes = ['Luciano', 'Tatiana', 'Ana', 'Maria'];
// simulação pop
const removidos = nomes.splice(-4, 1);
console.log(nomes, removidos);


// simulação shift
const removido = nomes.splice(0, 1);
console.log(nomes, removido);


// simulação push, adiciona um elemento no final
nomes.splice(nomes.length, 0, 'Antonio');
console.log(nomes);

// simulação de unshift, adiciona elemento no inicio
nomes.splice(0, 0, 'José', 'Fátima');
console.log(nomes);