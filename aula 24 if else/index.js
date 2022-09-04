/*
entre 0 - 11 - bom dia
entre 12 - 17 - boa tarde
entre 18 - 23 - boa noite

if pode ser usado sozinho.
Sempre que utilizo a palavra else, preciso de um if antes.
Podemos colocar diversos else ifs na checagem de condição.
Só podemos ter um else na checagem. 
Podemos usar condições sem else if, utilizando apenas if e else.
*/

const hora = 15;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
} 
    else if (hora >= 12 && hora <= 17){
             console.log('Boa tarde');
    }
    else if (hora >=18 && hora <=23){
        console.log('boa noite');
    }
    else{
        console.log('Olá! Essa hora é surreal');
    }

