// quando (i++) incrementa mais um número
// quando (i += 10) incrementa de dez em dez. Pode colocar a quantidade que quiser.

for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}
console.log('--------------');

for (let i = 0; i <= 100; i += 10) {
    console.log(`Linha ${i}`);
}
console.log('--------------');

// Começa com entrada negativa
for (let i = -100; i <= 100; i += 10) {
    console.log(`Linha ${i}`);
}
console.log('--------------');

// Fazendo decremento, contagem decrescente
for (let i = 100; i >= 0; i -= 10) {
    console.log(`Linha ${i}`);
}

// Validando par ou impar
for (let i = 1; i <= 20; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar'; // Essa expressão diz se o resto da divisão por 2 for igual a 0, então é par.
    console.log(i, par);
}

// Percorrer um array
const frutas = ['Maça', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) { // (frutas.length) percorre todo array, não sendo necessário saber o último valor.
    console.log(`Índice ${i}`, frutas[i]);
}
