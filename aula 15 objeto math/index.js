let num1 = 9.54578;

// aproxima o número para menos
let num2 = Math.floor(num1); 
console.log(num2);

// aproxima o número para cima
let num3 = Math.ceil(num1); 
console.log(num3);

// aproxima o número de forma automática para cima ou para baixo, conforme operação matemática
let num4 = Math.round(num1);
console.log(num4);

// localiza o maior número dentro de uma sequência numérica 
console.log(Math.max(1, 2, 15, 16, 72, -1, 110, 25)); 
console.log(Math.min(1, 2, 15, 16, 72, -1, 110, 25)); // menor número

// gerar número aleatório entre 0 e 1
console.log(Math.random());
// gerar número aleatório entre 5 e 10 com o valor arredondado
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

// valor de PI
console.log(Math.PI)

// potenciação valores elevado, o segundo número é a potencia
console.log(Math.pow(2, 10));
console.log(2 ** 10); // faz o mesmo resultado

// raiz quadrada, os dois fazem o mesmo resultado
let num5 = 9;
console.log(num5 ** (1/2));

console.log(num5 ** 0.5);
