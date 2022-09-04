
let umaString = 'Um texto';

// formas de concatenar
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

// busca o índice da palavra
console.log(umaString.indexOf('texto'));

//substitui a palavra
console.log(umaString.replace('Um', 'Outro'));

//quando colocar a letra(g) ele substitui a letra em todo o texto
let outraString = ('O rato roeu a roupa do rei de roma.');
console.log(outraString.replace(/r/g, '#'));

//para saber o tamanho da string
console.log(outraString.length);

//para dividir o espaço com o caracter que quiser indicar
console.log(outraString.split('r'));

//colocar em maiúscula e minúscula
console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());