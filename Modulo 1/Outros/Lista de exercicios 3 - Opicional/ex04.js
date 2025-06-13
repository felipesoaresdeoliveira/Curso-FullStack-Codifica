// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')()
console.log('Olá, essa é a calculadora de triângulos!')
const lado1 = parseInt(prompt('Qual o comprimento do primeiro lado: '))
const lado2 = parseInt(prompt('Qual o comprimento do segundo lado: '))
const lado3 = parseInt(prompt('Qual o comprimento do terceiro lado: '))

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    console.log('É possível formar um triângulo com esses lados!')
}
else {
    console.log('Não é possível formar um triângulo com esses lados!')
}
console.log('Obrigado por usar a calculadora de triângulos!')