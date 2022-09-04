//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// valores em milésimos de segundos
/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras); // quando utiliza (new) estamos contruindo uma função e a primeira letra será maiúscula.
// o (0) representa 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());
*/
//                 (ano, mes, dia, hora, min, segundos, milesimos de segundos)
// Os mês começa no 0. 0= janeiro - 1=fevereiro,...
//const data = new Date(2019, 3, 20, 15, 14, 27, 500);
//console.log(data.toString());

/*
// Quando declarado como string o mês tem seu valor normal
// Essa é maneira mais utilizada
const data = new Date('2019-04-20 20:15:59.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now()); // Valor em milésimos de segundos desde o marco 0
*/
function zeroAEsquerda (num){ // Função que adiciona o zero a esquerda, pq o java não coloca de maneira automática
    return num >=10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`

}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);