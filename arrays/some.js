// O Some verifica se o parâmetro é True or False.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numeros.some(element => console.log(element % 2 == 0)) //Nessa situação, ele percorreu todos os valores

console.log('\n')
const verifique = (element) => element % 2 === 0;
console.log(numeros.some(verifique)); // Nesse ele apenas retorna se é verdadeiro ou falso

console.log('\n')

const pessoas = ['João', 'Miguel', 'Olivier', 'Maria', 'Denise']
const ache = pessoas.some(element => console.log(element == 'Maria'))