/* 
? :  -> Operadores ternários

maneira de escrever -> (condicao) ? 'Valor para verdadeiro' : Valor para falso;
*/

const pontuacaoUser = 1500;

/* Maneira de resolver no método padrão
if (pontuacaoUser >= 1000){
    console.log('Usuário VIP');
}else{
    console.log('Usuário Normal');
}
*/
const corUser = null;
const corPadrao = corUser || 'Preta';

// Maneira de escrever o mesmo código através da operação em ternário
const nivelUser = pontuacaoUser >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUser, corPadrao);

