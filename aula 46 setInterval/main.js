function mostrarHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
console.log(mostrarHora());
 /*
function funcaoDoInterval(){
    console.log(mostrarHora());
}

setInterval(funcaoDoInterval, 1000); // Executa por intervalo, no caso foi utilizado um segundo
*/

// Pode ser feita da maneira abaixo colocando a function direto

const timer = setInterval(function (){
    console.log(mostrarHora());
}, 1000);
 /*
setTimeout(function () { // Essa função só executa uma vez e finaliza
    clearInterval(timer);
}, 5000);
*/
setTimeout (function () {
    console.log('Terminou depois de 5 segundos');
    clearInterval(timer);
}, 5000);