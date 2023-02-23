// Objetivo: Criar duas implementações para cada um dos seguintes itens
// Let, Var, Const, Escopo de Função

console.log("--------- Let ---------");

// 1. Let: Variável de Escopo
let nome = "Gerson";
if (nome == "Gerson") {
  let nomeCompleto = "Gerson Silva";
  console.log("Seu nome completo é " + nomeCompleto);
} //console.log('Seu nome completo é ' + nomeCompleto) -> Tentando acessar fora de onde foi definido a variável Let "nomeCompleto" temos um erro.

for (let i = 1; i <= 5; i++) {
  console.log("N° de repetições: " + i);
} //console.log(i); Executando fora, o erro diz que a variável Let "i" não é definida, ou seja, ela não existe fora de onde foi criada.

console.log("\n--------- Var ---------");

//2. Var: Variável Global
var idade = 18;
var usuario = "José";
function aniversarios() {
  for (var x = 16; x <= idade; x++) {
    console.log(`${usuario} fez ${x} anos!`);
  }
}
aniversarios();

if (idade == 18) {
  console.log("Agora você pode dirigir " + usuario);
  usuario = "Gerson";
} else {
  console.log("Você não pode dirigir, ainda...");
}

console.log("Bem vindo de volta, " + usuario);
