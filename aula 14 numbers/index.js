// IEEE 754-2008

let num1 = 15.578451258; // number
let num2 = 2.5; // number
let num3 = 1500;
let num4 = 32;
let num5 = 0.7;
let num6 = 0.1;
let num7 = 0.7;
let num8 = 0.1;

// (toString) -> Converte número em String 
// no caso abaixo o valor é convertido temporariamente
console.log(num1.toString() + num2.toString());

// No caso abaixo a variável numérica é convertida em String em definitivo
num4 = num4.toString();

// para converter o número em binário
console.log(num3.toString(2));

// Faz aproximação das casas decimais, dentro do () é definido a quantidade de casas você deseja.
console.log(num1.toFixed(2));

// Função para saber se o número é inteiro ou não, retornando verdadeiro ou falso
console.log(Number.isInteger(num3));

// Verifica NaN e retorna o valor verdadeiro ou falso para operações entre string e number
let temp = num3 * 'ola';
console.log(Number.isNaN(temp));

// Faz a aproximação do número em casas decimais por conta da imprecisão dos números decimais
num5 += num6; // Dessa maneira o valor é somado
num5 = parseFloat(num5.toFixed(2)); // faz a aproximação do número ou pode usar tbm: num5 = Number(num5.toFixed(2));
console.log(num5);

// Outra maneira de fazer aproximação dos números, usando a matemática
num7 = ((num7 * 100) + (num8 * 100)) / 100;
console.log(num7);


