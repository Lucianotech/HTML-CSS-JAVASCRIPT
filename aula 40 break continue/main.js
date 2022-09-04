const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // Quando encontra a palavra (continue) ele pula a ação executada e continua o código
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; // (break) ao encontrar a condição, ele para de excutar o código
    }
    
    console.log(numero);
}
