// filter -> sempre irá retornar um array, com a mesma quantiddade de elementos do array original.
// map 
// reduce

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter( valor => valor >= 10); //->maneira mais simples de retorno do callback. código simplificado.

// Abaixo é a mesma função de callback, menos simplificada
/* function callbackFilter(valor) {  // os argumentos podem ser(valor, indice, array)
    return valor >=10;
        }

const numerosFiltrados = numeros.filter(callbackFilter);
*/

console.log(numerosFiltrados);






const pessoas = [
    {nome: 'Luciano', idade: 41},
    {nome: 'Tatiana', idade: 39},
    {nome: 'Maria', idade: 7},
    {nome: 'Ana', idade: 5},
    {nome: 'Rosana', idade: 66},
    {nome: 'Wallace', idade: 70},
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
// const pessoasMaisde5 = pessoas.filter(obj => obj.nome.length >= 5); Feito com aero function, opção mais curta
const pessoasMaisde5 = pessoas.filter(function(obj) {
    return obj.nome.length >= 5;
});
console.log(pessoasMaisde5);

// Retorne as pessoas com mais de 50 anos
const pessoasMaisde50 = pessoas.filter(obj => obj.idade > 50); // aero function
console.log(pessoasMaisde50);

/* 
const pessoasMaisde50 = pessoas.filter(function(obj) { 
    return obj.idade > 50; 
}); 
console.log(pessoasMaisde50);
*/

// Retorne as pessoas cujo nome termina com a letra a

const pessoasTerminaComLetraA = pessoas.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasTerminaComLetraA);
