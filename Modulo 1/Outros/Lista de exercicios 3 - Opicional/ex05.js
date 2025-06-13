// 5 Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

const prompt = require('prompt-sync')()

console.log('Olá, esse é o jogo de JoKenPo!')
escolhaJogador = prompt('Escolha Pedra, Papel ou Tesoura: ').toLowerCase()
NumAleatorio = Math.floor(Math.random() * 3)
let escolhaComputador 

if (NumAleatorio == 0) {
    escolhaComputador = 'pedra'
}
else if (NumAleatorio == 1) {
    escolhaComputador = 'papel'
}
else if (NumAleatorio == 2) {
    escolhaComputador = 'tesoura'
}

switch (escolhaJogador) {
    case 'pedra':
        if (escolhaComputador == 'pedra') {
            console.log('Empate! Você e o computador escolheram Pedra!')
        }
        else if (escolhaComputador == 'papel') {
            console.log('Você perdeu! O computador escolheu Papel!')
        }
        else {
            console.log('Você ganhou! O computador escolheu Tesoura!')
        }
        break
    case 'papel':
        if (escolhaComputador == 'pedra') {
            console.log('Você ganhou! O computador escolheu Pedra!')
        }
        else if (escolhaComputador == 'papel') {
            console.log('Empate! Você e o computador escolheram Papel!')
        }
        else {
            console.log('Você perdeu! O computador escolheu Tesoura!')
        }
        break
    case 'tesoura':
        if (escolhaComputador == 'pedra') {
            console.log('Você perdeu! O computador escolheu Pedra!')
        }
        else if (escolhaComputador == 'papel') {
            console.log('Você ganhou! O computador escolheu Papel!')
        }
        else {
            console.log('Empate! Você e o computador escolheram Tesoura!')
        }
        break
    default:
        console.log('Escolha inválida! Escolha Pedra, Papel ou Tesoura!')
}