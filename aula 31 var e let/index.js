// let tem escopo de bloco {...bloco}
// var só tem escopo de função
// a variável (nome) está sendo declarada dentro de cada bloco, apesar de ter o mesmo nome, elas são variáveis diferentes.
const verdadeira = true;

let nome = 'casa';
var nome2 = 'casa';

if (verdadeira){
    let nome = 'minha'; // criado
    console.log(nome, nome2);

}

if (verdadeira) {
    let nome = 'Outra coisa';
    console.log(nome, nome2);
}


// escopo de função, acessa variável de fora do seu bloco. Não conseguimos usar as variáveis de dentro da função fora dela.
var sobrenome = 'COsta'
function falaoi (){
    console.log('Oi');
    console.log(sobrenome);
    var nome4 = 'Luciano';
}
console.log(nome4);// não se pode acessar variável declarada dentro da função 
falaoi();


