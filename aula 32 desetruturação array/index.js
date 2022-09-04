let a ='A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

// ... rest, ... spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros; // (...resto) os três pontos seguido da variável pega o resto dos números
console.log(primeiroNumero, segundoNumero);
console.log(resto);

// indices             0           1          2
// indices lista    0  1  2    0  1  2    0  1  2
const numeros1 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log (numeros1[1][2]); //acessando o indice(0) e o indice lista(2).O resultado será o (6).

const [lista1, lista2, lista3] = numeros1;
console.log(lista3[2]);