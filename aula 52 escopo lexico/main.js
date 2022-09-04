// Escopo Léxico sempre lembra o valor da variável

const nome = 'Luciano';

function falaNome() {
    console.log(nome);
}
falaNome();


function usaFalaNome() {
    falaNome();
}
usaFalaNome();