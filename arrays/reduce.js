// Reduce serve justamente para Reduzir o tamanho de um array

let somaPares = [2, 4, 6, 8].reduce((x, y) => {
  return x + y;
}, 0);
console.log(somaPares); //Somou todos os elementos do array


let listaNomes = ["João", "Diogo", "Carlos", "João", "Digo", "Carlinhos", "Diogo"];
let seRepetem = listaNomes.reduce((todos, atual) => {
  if (atual in todos) {
    todos[atual]++;
  } else {
    todos[atual] = 1;
  }
  return todos;
}, {});
console.log(seRepetem);