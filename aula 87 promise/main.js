function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Utilizando Promise
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Erro na Promise');
            return;
        }
        setTimeout(() => {
           resolve(msg.toUpperCase() + ' - Passei na promise');
           return;
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [ 
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 3000),
    esperaAi('Promise 3', 3000),
    //esperaAi(1000, 1000), // Simula erro na Promise
    'Outro Valor'
];

Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
});
