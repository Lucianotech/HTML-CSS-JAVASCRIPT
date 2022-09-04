let varA = 'A';  // B
let varB = 'B';  // C
let varC = 'C';  // A

console.log('Variáveis na ordem: ', varA, varB, varC);

// Uma maneira de solucionar, criando uma variável temporária.

//let varAtemp = varA;
//varA = varB;
//varB = varC;
//varC = varAtemp;

console.log('Variáveis com valores substituídos: ', varA, varB, varC);

// Outra solução mais moderna

[varA, varB, varC] = [varB, varC, varA]

console.log('Variáveis com valores substituídos: ', varA, varB, varC);

