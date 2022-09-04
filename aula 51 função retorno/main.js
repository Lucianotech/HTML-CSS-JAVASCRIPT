// return -> retorno das funções
// retorno de um valor
// termina a função

function soma (a, b) {
    return a + b; // return trás o retorno da função
}
 console.log(soma(2, 5)); // O console.log somente exibe a informação

 /////////////
/*
document.addEventListener('click', function() { // Altera o fundo do html para vermelho com um clique
    document.body.style.backgroundColor = 'red';
});
*/
//////////

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}
const p1 = criaPessoa('Luciano', 'Costa');
const p2 = {
    nome: 'Tatiana',
    sobrenome: 'Costa'
};

console.log(p1);
console.log(p2);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Hello');
console.log(olaMundo('World'));

//////////

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
//////////

