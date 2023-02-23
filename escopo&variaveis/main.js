// Objetivo: Criar duas implementações para cada um dos seguintes itens
// Let, Var, Const, Escopo de Função

console.log("--------- Let ---------");
// 1. Let: Variável de Escopo

let preco = 20;
function naTenda() {
  let preco = 10;
  console.log(
    "Se levar AGORA meia duzia de bananas, maças e laranjas, paga só R$" + preco
  );
}
naTenda();
console.log("No mercado eu pagaria R$" + preco);
// Ele não sobreescreve o preço, ele trata como se fossem 2 variáveis, uma dentro e outra fora do escopo.
// Se tirar o let de dentro da Function, ainda sim funcionará, porém, se atribuirmos um let dentro e chamar fora, ele não roda.

let promo = 0.6;
function noMercado() {
  let precoMercado = 20 * promo;
  if (precoMercado >= 10) {
    console.log("Na feira é mais barato que no mercado.");
  } else {
    console.log("Vale mais a pena comprar no mercado.");
  }
}
noMercado();
// console.log(precoMercado) ---> Undefined

console.log("\n--------- Var ---------");
//2. Var: Variável Global
var precoCarro = 100000;
console.log("Preço original R$" + precoCarro);

function precoPromocional() {
  precoCarro = 90000;
  console.log(
    "Imperdível! De 100k você levara esse carro por apenas " + precoCarro
  );
}
precoPromocional();
console.log(precoCarro); // Diferente de Let, var sobreescreveu o valor quando a Function foi chamada.

var endereçoCEP = "01310-100";
function localizar() {
  if (endereçoCEP == "01310-100") {
    console.log("Não mudou de casa");
  } else {
    console.log("Mudou de casa");
  }
}
localizar();
localizar((endereçoCEP = "6656-420"));
console.log(endereçoCEP);
// É possível alterar QUASE em qualquer lugar variáveis Var

console.log("\n-------- Const ---------");

// 3. Const, "variável" Constante
const meuCPF = 12345678906;
function consultar() {
  if (meuCPF == 12345678906) {
    console.log("CPF válido");
  } else {
    console.log("CPF Inválido");
  }
}
consultar();
// consultar(meuCPF = 99968798291); --> Atribuição a uma variável Constante, então não pode ser mudado

const pessoa = {
  nome: "José",
  apelido: "Jhony",
};
/* pessoa = {
   nome: 'Gerson',
   apelido: 'Ge'
 }*/
console.log(pessoa);

// Não é possível mudar o valor de um Objeto assim, PORÉM:
pessoa.nome = "Gerson";
pessoa.apelido = "Ge";
console.log(pessoa);

console.log("\n------ Escopo de Função -----");
//4. Escopo de Função, "Blocos"
//No Restante desse arquivo, usamos diversas {}, que é justamente o Escopo, ou Bloco de Código. Vimos que ele serve para limitar ações
//dentro das chaves.

function soma(a, b) {
  return a + b;
}
const resultado = soma(2, 6);
console.log(resultado);

if (resultado % 2 == 1) {
  console.log("É Impar o Resultado");
} else {
  console.log("É Par o Resultado");
}
// If Else tbm usam Escopo.

// Esses são exemplos do que podemos fazer com Let, Var, Const e com os Escopos de Função