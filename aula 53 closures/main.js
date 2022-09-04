function retornaFuncao(nome) {
       return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Luciano');
const funcao2 = retornaFuncao('Costa');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());