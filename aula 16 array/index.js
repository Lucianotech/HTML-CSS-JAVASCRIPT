
//Indices Array->  0         1       2
const alunos = ['Luciano', 'Ana', 'Maria'];
console.log(alunos[0]);
console.log(alunos);
console.log(alunos[2])

// Alterar o índice do array

alunos[0] = 'Eduardo';
console.log(alunos[0]);

// Adicionar elementos a lista conhecendo o último elemento
alunos[3] = 'Luiza';
console.log(alunos);

// Adicionar elementos a lista ao final da lista
alunos[alunos.length] = 'Moisés';
alunos[alunos.length] = 'Pedro';
alunos[alunos.length] = 'Joana';

// Para saber o tamanho do Array
console.log(alunos.length);
console.log(alunos);

// Para incluir elementos ao final da lista
alunos.push('Marcelo');
alunos.push('Tatiana');

console.log(alunos);

// Para adicionar elementos no início da lista
alunos.unshift('Patricia');
alunos.unshift('Fábio');
console.log(alunos);

// Remover Elementos do final da lista
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

// Remover o primeiro elemento da lista array
const removido1 = alunos.shift();
console.log(removido1);
console.log(alunos);

// Apagando índices onde o mesmo fica vazio
delete alunos[1];
console.log(alunos);

// Acessar índice que não existe
console.log(alunos[50]);

// Dividir os índice dos elementos do array
console.log(alunos.slice(0, 3));
