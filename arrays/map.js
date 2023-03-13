// O map serve para mapear uma array existente para outro, podendo mudar os valoers já contidos.
const numerosImparares = [1, 3, 5, 7, 9];
const numerosPares = numerosImparares.map((element) => {
  return element + 1;
});
console.log(numerosImparares);
console.log(numerosPares);
// Não é a melhor forma de fazer isso... mas serve.

console.log("\n----------------------\n");

const numerosComRaiz = [1, 4, 9, 16, 25];
const raizes = numerosComRaiz.map(Math.sqrt);
console.log(numerosComRaiz);
console.log(raizes);