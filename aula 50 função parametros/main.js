// Arguments -> Sustenta todos os argumentos enviados
function funcao() { // Pega o índice através do argumento
    console.log(arguments[1]);
}
funcao('valor', 'casa', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcaoSoma() { // Soma os argumentos com essa função
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcaoSoma(1, 2, 3, 4, 5, 6, 7, 8);

///////////////////////////////////
// Apresenta undefined quando não tem um parâmetro de referência
function funcaoUn(a, b, c, d, e, f) { 
    console.log(a, b, c, d, e, f);
}
funcaoUn(1, 2, 3);

// Somente undefined é a maneira de assumir o valor declarado na variável, não podendo zerar ou colocar string vazia
function funcaoSr(a, b = 2, c = 4) {
        console.log(a + b + c);
}
funcaoSr(2, undefined, 20)

// Atribuição via desestruturação
function funcaoDes({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcaoDes({nome: 'Luciano', sobrenome:'Costa', idade: 41}); // Objeto literal como argumento


// Atribuição por array
function funcaoAr([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcaoAr(['Luciano', 'Costa', 41]);


// Usando rest Operator(...) ele coloca o argumento como um array, ele sempre deve ser o último parâmetro
function conta(operador, acumulador, ...numeros){
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('*', 1, 20, 30, 40, 50);
//     1   2   3...
// 1 - campo do operador
// 2 - campo do acumulador
// 3 - restante são os números

// Outra maneira mais simples de fazer o rest operator
const conta1 = (...args) => {
    console.log(args);
};
conta1 ('+', 1, 20, 30, 40, 50);


