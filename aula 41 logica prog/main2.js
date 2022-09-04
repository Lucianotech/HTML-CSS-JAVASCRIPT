// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FixxBuzz
// Número não é divisivel por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

function retorno(x) {
    if (typeof x !== 'number') return NaN; // Checa se é número
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz'; // Essa condição vem primeiro, devido a hierarquia de execução. Se ele vier no final essa condição não será executada, e será executada só o primeiro if.
    if (x % 3 === 0) return ('Fizz');
    if (x % 5 === 0) return ('Buzz');
    
    return x;   
}
console.log('a', retorno('a')) // Imprime a checagem da condição do typeof

for ( let i = 0; i <=100; i++) {
   console.log(i, retorno(i)) 
}
    
