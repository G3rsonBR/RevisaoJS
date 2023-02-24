// O forEach ele percorre todos os elementos de uma array, imprimindo-os de forma sequenciada

const animals = ["Porco", "Galinha", "Vaca", "Ovelha"];
animals.forEach((element) => console.log(element));

const menu = [
  {
    nome: "X-Tudo",
    preco: "20.00",
  },
  {
    nome: "X-Bacon",
    preco: "15.00",
  },
  {
    nome: "X-Salada",
    preco: "15.00",
  },
  {
    nome: "X-Burguer",
    preco: "12.00",
  },
];

console.log("\nNossos Lanches:\n");
menu.forEach((element) =>
  console.log(`Nome: ${element.nome}\nCusta: ${element.preco}\n`)
);
