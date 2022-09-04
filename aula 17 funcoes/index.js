function saudacao(nome) {
return `Bom dia ${nome}!`;
}
const variavel = saudacao('Luciano');
console.log(variavel);


function soma(x= 0, y= 0){
const resultado = x + y;
return resultado;
}
console.log(soma(2, 5));


const raiz = function (n){
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(49));
console.log(raiz(81));


const raiz1 = n => n ** 0.5; // outra maneira de executar uma function
console.log(raiz1(16));
console.log(raiz1(25));
console.log(raiz1(64));