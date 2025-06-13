// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')()
console.log('Olá, esse é o jogo de adivinhação!')
console.log('O computador vai sortear um número entre 1 e 5.')
console.log('Você vai tentar descobrir qual foi o número sorteado e terá 4 tentativas.')

const NumSorteado = Math.floor(Math.random() * 5) + 1
for (let i = 0; i < 4; i++) {
    console.log('Tentativa', i + 1)
    const numJogador = parseInt(prompt('Escolha um número entre 1 e 5: '))
    if (numJogador == NumSorteado){
        console.log('Parabéns! Você acertou o número sorteado!')
        break
    }
    else if (numJogador != NumSorteado && i < 3) {
        console.log('Você errou! Tente novamente!')
    }
    if (i == 3) {
        console.log('Você perdeu! O número sorteado era', NumSorteado)
    }
}