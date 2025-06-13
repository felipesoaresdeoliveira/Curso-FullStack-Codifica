//exercicio 3: calculadora simples 

//colocar a biblioteca do prompt
const prompt = require('prompt-sync')()

console.log('Olá, seja bem vindo a calculadora simples')

let num1 = prompt('Digite o primeiro numero: ')
let num2 = prompt('Digite o segundo numero: ')


let operacao = prompt('Digite a operação desejada +, -, *, /: ')


let resultado = 0

switch(operacao) {
    case '*':
        resultado = parseFloat(num1) * parseFloat(num2)
        console.log('O resultado da operação é: ' + resultado)
        console.log('Obrigado por usar a calculadora simples!')
        break
    case '/':
        resultado = parseFloat(num1) / parseFloat(num2)
        console.log('O resultado da operação é: ' + resultado)
        console.log('Obrigado por usar a calculadora simples!')
        break
    case '+':
        resultado = parseFloat(num1) + parseFloat(num2)
        console.log('O resultado da operação é: ' + resultado)
        console.log('Obrigado por usar a calculadora simples!')
        break
    case '-':
        resultado = parseFloat(num1) - parseFloat(num2)
        console.log('O resultado da operação é: ' + resultado)
        console.log('Obrigado por usar a calculadora simples!')
        break
    default:
        console.log('Operação inválida!')
        break
}


