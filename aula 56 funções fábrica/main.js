// Factory function (função fábrica)
// Constructor function (função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return{
        nome, sobrenome,

        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`; // O this sempre vai se referir a pessoa que o chamou
        },
        altura: a,
        peso: p,
        get imc() { // Getter, esse get é para obter o valor 
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luciano', 'Costa', 1.73, 84);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
console.log(p2.fala('falando sobre java'));

console.log(p1.nomeCompleto());