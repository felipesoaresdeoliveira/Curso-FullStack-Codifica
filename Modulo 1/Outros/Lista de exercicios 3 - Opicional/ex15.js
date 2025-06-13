// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require("prompt-sync")()

let n1 = []

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Digite um número: "))
    n1.push(number)
}

console.log("Números pares e suas posições:")
for (let i = 0; i < n1.length; i++) {
    if (n1[i] % 2 === 0) {
        console.log(`Número: ${n1[i]}, Posição: ${i}`)
    }
}