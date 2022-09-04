
// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobrarValor = numeros.map( function(valor){
    return valor * 2;
});
console.log('Numeros', numeros);
console.log('Dobro dos números',dobrarValor);


const pessoas = [
{nome: 'Luiz', idade:70},
{nome: 'Maria', idade:44},
{nome: 'Eduarda', idade:22},
{nome: 'Leticia', idade:51},
{nome: 'Rosana', idade:32},
{nome: 'Valdilene', idade:62},
];

// Retorne apenas uma string com o nome da pessoa
// const nomeDaPessoa = pessoas.map (valor => valor.nome); -> Aero function
const nomeDaPessoa = pessoas.map(function(valor){
    return valor.nome;
});
console.log(nomeDaPessoa);

// Remova apenas a chave "nome" do objeto
// const removeNome = pessoas.map( obj => ({ idade: obj.idade})); -> Aero function
const removeNome = pessoas.map(function (obj){
    delete obj.nome;
    return obj;
});
console.log(removeNome);


// Adicione uma chave de id em cada objeto
const colocandoId = pessoas.map( function(obj, indice){
    const newObj = { ...obj };
    newObj.id = indice + 1; // para não começar com zero
    return newObj;
});
console.log(colocandoId);
