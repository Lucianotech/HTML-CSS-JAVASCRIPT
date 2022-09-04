/*
const pessoa1 = {
    nome: 'Luciano',
    sobrenome: 'Costa',
    idade: 41
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luciano', 'Costa', 41);
const pessoa2 = criaPessoa('Ana', 'Carolina', 5);
const pessoa3 = criaPessoa('Lucia', 'Costantino', 23);


function criaPessoa (nome, sobrenome, idade){
    return{ nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luciano', 'Costa', 41);
const pessoa2 = criaPessoa('Ana', 'Carolina', 5);
const pessoa3 = criaPessoa('Lucia', 'Costantino', 23);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
*/

const pessoa1 = {
    nome: 'Luciano',
    sobrenome: 'Costa',
    idade: 41,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();