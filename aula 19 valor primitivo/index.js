/* 
Primitivos (imutáveis) -> string, number, boolean, undefined, null, bigint, symbol. - Valores copiados

Referência (mutável) -> array, object, function. - Passados por referência
*/

let a = [1, 2, 3];
let b= [...a]; // valor copiado para dentro de B, está sendo feito um spreed, deixando o B totalmente independente.
let c = b;

console.log(a, b, c);
