// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
// h elevado a -1
// , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')()

console.log('Olá, essa é a calculadora de multas!')
const velocidade = parseInt(prompt('Qual a velocidade estava seu carro: '))

if (velocidade > 80) {
    const multa = (velocidade - 80) * 5
    const excesso = velocidade - 80
    console.log(`Você foi multado! O valor da multa é R$ ${multa.toFixed(2)} por estar ${excesso} Km/h acima do limite permitido de 80.`)
}
else {
    console.log('Você não foi multado, estava dentro do limite!')
    console.log('Continue dirigindo com segurança!')
}