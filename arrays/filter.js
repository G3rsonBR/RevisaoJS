// Filter é usado justamente para filtrar elementos ou itens de um array

const chamada = [
  {
    nome: "Ariane",
    sexo: "F",
  },
  {
    nome: "Cristiano",
    sexo: "M",
  },
  {
    nome: "Giovana",
    sexo: "F",
  },
  {
    nome: "Renato",
    sexo: "M",
  },
];

let filtrarMasc = [];
filtrarMasc = chamada.filter((element) => element.sexo == "M");
console.log(filtrarMasc);

const catalogo = [
  {
    produto: "Topo de Bolo",
    preco: "10.00",
  },
  {
    produto: "Bala Personalizada",
    preco: "40.00",
  },
  {
    produto: "Kit Festa",
    preco: "45.00",
  },
  {
    produto: "Porta Bombom",
    preco: "2.50",
  },
];

let filtrarProduto = [];
filtrarProduto = catalogo.filter((element) => element.preco >= "40.00");
console.log(filtrarProduto);
