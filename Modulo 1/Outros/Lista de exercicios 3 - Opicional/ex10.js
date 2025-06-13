// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')();

let valores = [];

while (true) {
for (let i = 0; i < 1; i++) {
    const numero = parseFloat(prompt('Digite um número: '));
    valores.push(numero)
}
    if (valores.length === 0) {
    console.log('Nenhum número foi digitado.');
    break
}
    const continuar = prompt('Deseja continuar? (S/N): ').toUpperCase();
    if(continuar !== 'S') {
        break
    }
}

let ordernarVet = function(valores) {
    return valores.sort((a, b) => a - b)
}

let SomaVet = function(valores) {
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    return soma
}

let MediaVet = function(valores) {
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    return soma / valores.length
}

let ParVet = function(valores) {
    let cont = 0
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 === 0) {
            cont++
        }
    }
    return cont
}

let soma = SomaVet(valores)
let media = MediaVet(valores)
let par = ParVet(valores)
let menor = ordernarVet(valores)[0]

console.log('Os Valores digitados foram:', valores)
console.log(`A soma entre todos os valores é: ${soma}`)
console.log(`O menor valor digitado é: ${menor}`)
console.log(`A média entre todos os valores é: ${media}`)
console.log(`A quantidade de valores pares é: ${par}`)





