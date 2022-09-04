
const nome = 'Luciano';
const sobrenome = 'Costa';
const idade = 41;
const peso = 84;
const altura = 1.74;
let imc = peso / (altura * altura);
let anoNascimento = 2021 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu no ano de ${anoNascimento} pesando ${peso}Kg, com altura de ${altura}m e seu IMC é de ${imc}.`);

if (imc <= 25){
   console.log('Parabéns, você está dentro do peso ideal.');
}
else{
 console.log('Atenção! Você está acima do peso. Procure um médico.');
}