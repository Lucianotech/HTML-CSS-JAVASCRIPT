console.log('----Abaixo temos a concatenação por concat----')
const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = num1.concat(num2, [7,8,9], 'Luciano'); // concat -> faz a concatenação
console.log(num3);


console.log('------Abaixo temos a concatenação por ...rest------')
// (... rest) também pode ser feito por spread operator

const num4 = [...num1, ...num2, 'Luciano', ...[7,8,9]];
console.log(num4);
