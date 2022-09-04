/*
let i = 0;

while (i <= 10) {   // Sempre colocar (i++) ao final para não ter looping infinito
    console.log(i);
    i++;
}

console.log('###############')

const nome = 'Luciano';
let inome = 0;
while (inome < nome.length) {
    console.log(nome[inome]);
    inome++;
}

*/
function random( min, max) { // função para imprimir números aleatórios
    const r = Math.random() * (max -min) + min;
    return Math.floor(r); 
}
const min = 1;
const max = 50;
let rand = random (min, max);
console.log(rand);

while (rand !== 10) { // Enquanto o número for diferente de 10 o programa continua rodando.
    rand = random(min, max);
    console.log(rand);
}

console.log('#########- Abaixo do-while')
do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);