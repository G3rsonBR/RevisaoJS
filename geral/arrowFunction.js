// Arrow Function, uma versão "Reduzida" da Function

const aoQuadrado = (x) => x * x;
console.log(aoQuadrado(9));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const multiplique = numbers.reduce((x, y) => x * y)
console.log(multiplique)