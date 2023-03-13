// Argumentos com prefixo '...' são transformados em Arrays

function test(a, b, ...array) {
  console.log(a, b, array);
}
test(1, 2);
test(1, 2, 3);
test(1, 2, 3, 4, 5, 6);

console.log("\n");

const somar = (soma, ...argumento) =>
  argumento.map((element) => soma + element);

var final = somar(2, 1, 2, 3);
console.log(final);
//Somamos os números pelo primeiro parâmetro.