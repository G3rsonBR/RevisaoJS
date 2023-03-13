// Esse método espelha o conteúdo de um array ou string para outro local

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [...numbers];
numbers2.push(6);

console.log(numbers);
console.log(numbers2);

const soma = (x, y, z) => x + y + z;
console.log(soma(...numbers2));