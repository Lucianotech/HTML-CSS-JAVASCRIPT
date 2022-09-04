/*
try {
    console.log(naoExisto); // A variável naoExisto, não foi criada
}catch (erro) {
    console.log('naoExisto não Existe.'); // tratativa do erro.
}
*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.');
    }
    return x + y;
}
console.log(soma(1, 2));
console.log(soma('a', 2));

