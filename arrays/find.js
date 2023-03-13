// O Find ele busca o primeiro valor que for True, se não achar, retorna Undefined

const numbers = [1, 2, 3, 4, 5, 55];
const findNumber = numbers.find((number) => number / 5 == 11);
console.log(findNumber);

const fruits = [
  {
    nome: "maça",
    quantidade: "2",
  },
  {
    nome: "banana",
    quantidade: "5",
  },
  {
    nome: "laranja",
    quantidade: "4",
  },
  {
    nome: "abacaxi",
    quantidade: "1",
  },
];
const findFruit = fruits.find((fruit) => fruit.nome == "laranja");
console.log(findFruit);

const findWatermelon = fruits.find((fruit) => fruit.nome == "melancia");
console.log(findWatermelon); // Apenas para vermos o retorno de Undefined, pois não há esse elemento.
