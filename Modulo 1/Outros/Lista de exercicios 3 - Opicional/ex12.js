// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

 let prompt = require('prompt-sync')()
 let seq = prompt("Digite quantos números da sequência de Fibonacci você deseja ver: ")

 let a = 0, b = 1, c = 0
    console.log("Sequência de Fibonacci:")
    for (let i = 0; i < seq; i++) {
        console.log(a)
        c = a + b
        a = b
        b = c
    }