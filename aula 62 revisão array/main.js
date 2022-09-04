const nome = ['Eduardo', 'Maria', 'Joana'];
nome[2] = 'Luciano';
delete nome[1];
console.log(nome);

const nomes = new Array('Luciano', 'Tatiana', 'Ana');
nomes[2] = 'Maria';
delete nomes[1];
nomes.pop(); // exclui o ultimo indice
nomes.shift(); // exclui o primeiro indice
nomes.push('Maria'); // inclui no final do indice
nomes.unshift('Carlos'); // inclui no inicio do indice

console.log(nomes);

const nomez = ['Luciano', 'Tatiana', 'Ana'];
const novo = nomes.slice(1, -1);
console.log(novo);

// converter string em array
const nomee = 'Luciano Costa';
const nomees = nomee.split(' ');
console.log(nomees);

// converter array em string
const noome = ['Luciano', 'Costa'];
const noomes = noome.join(' ');
console.log(noomes);


