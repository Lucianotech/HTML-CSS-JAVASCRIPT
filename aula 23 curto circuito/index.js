/*
&& -> and -> false && true -> false "o valor mesmo"
|| -> or -> true || false -> vai retornar "o valor verdadeiro"

FALSY
false (valor literal)
0
'' " " `` (string vazia)
null / undefined
NaN


*/
function fala (){
    return 'A expressão é true';
}

const vaiExecutar = 'Ana';
console.log(vaiExecutar && fala());

