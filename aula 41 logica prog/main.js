// Escreva uma função que recebe 2 números e retorne o maior deles


function numeroMaior (x, y) {
    if (x > y) {
        return x;
        
    }else {
        return y;
    }
}
console.log(numeroMaior(1, 2));

// Outra maneira mais simples de fazer

function max(x, y) {
    return x > y ? x : y;
}
console.log(max(10, 2));

// outra maneira de resolver por Aerofunction

const max2 = (x, y) => x > y ? x : y;
console.log(max2(100, 20));
