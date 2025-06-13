//1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')()

const cigarrosPorDia = parseInt(prompt('Quantos cigarros você fuma por dia? '))
const anosFumando = parseInt(prompt('Quantos anos você fuma? '))

const minutosPorCigarro = 10

const percaDeVida = ((cigarrosPorDia * 365) * anosFumando) * minutosPorCigarro
const Minhoras = percaDeVida / 60
const dias = Minhoras / 24
const meses = dias / 30
const anos = meses / 12

console.log(`Você perdeu ${parseInt(percaDeVida)} minutos, ${parseInt(Minhoras)} horas, ${parseInt(dias)} dias, ${parseInt(meses)} meses, ${parseInt(anos)}, anos minutos de vida`)


console.log(`Tá na hora de parar de fumar!`)