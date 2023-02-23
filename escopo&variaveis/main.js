// Objetivo: Criar duas implementações para cada um dos seguintes itens
// Let, Var, Const, Escopo de Função

// 1. Let: Variável de Escopo, seu conteúdo, se definido dentro de um par de {}, só poderá ser acessado dentro deles.
let nome = "Gerson";
if (nome == "Gerson") {
  let nomeCompleto = "Gerson Silva";
  console.log("Seu nome completo é " + nomeCompleto);
} //console.log('Seu nome completo é ' + nomeCompleto) -> Tentando acessar fora de onde foi definido a variável Let "nomeCompleto" temos um erro.

for (let i = 1; i <= 5; i++) {
  console.log("N° de repetições: " + i);
} //console.log(i); Executando fora, o erro diz que a variável Let "i" não é definida, ou seja, ela não existe fora de onde foi criada.
