// Uma forma de extrair dados de um array ou objetos para variáveis distintas

let first, second, rest
[first, second, ...rest] = ['Maria', 'João', 'Douglas', 'Gerson', 'José']
console.log(`${first}\n${second}\n${rest}`)

let x, y, z
[x=2, y=5, z=9] = [1, 6, 8]
console.log(`${x}\n${y}\n${z}`)