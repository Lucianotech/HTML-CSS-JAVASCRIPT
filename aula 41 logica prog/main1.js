//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

function ePaisagem (largura, altura) {
    if (largura > altura) {
        return true;
    }else {
        return false;
    }
}
console.log(ePaisagem(1920, 1080));

// Utilizando Aerofunction

const ePaisagem1 = (largura1, altura1) => largura1 > altura1;
console.log(ePaisagem1(1920, 1080));