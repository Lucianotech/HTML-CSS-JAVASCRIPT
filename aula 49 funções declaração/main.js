// declaração de função (function hoisting) é executada antes ou depois da sua criação
function falaOi() {
    console.log('Olá');
}
falaOi();

// First-class objects (objetos de primeira classe)
// function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

function executaFuncao(funcao) { // Executa uma função dentro de outra função
    funcao();
};
executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();


// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();
