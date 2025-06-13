// console.log("Funções Nativas".length)
// console.log("Funções Nativas".charAt(0))
// console.log("Funções Nativas".replace("Nativas", "NATIVAS"))
// console.log("Funções Nativas".substr(0, 7))
// console.log("Funções Nativas".toLowerCase())
// console.log("Funções Nativas".toUpperCase())

// console.log("Funções" + "  Nativas".trim())
// console.log("Funções Nativas".split(""))
// console.log("Funções Nativas".split("  "))


// console.log(Math.ceil(5.5))
// console.log(Math.floor(5.5))
// console.log(Math.round(5.4))
// console.log(Math.sqrt(4))
// console.log(Math.pow(2, 3))
// console.log(Math.cbrt(8))
// console.log(Math.abs(81.123456789))
// console.log(Math.floor(Math.random() * 100))


// let data = new Date()
// console.log("Dia: " + data.getDate())
// console.log("Mês: " + (data.getMonth() + 1))
// console.log("Ano: " + data.getFullYear())
// console.log("Hora: " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds())
// console.log("Dia da semana: " + data.getDay())
// console.log("Data: " + data.toLocaleDateString())

// let data2 = new Date("2023-10-10")

// let diff = Math.abs(data2 - data)
// let dias = diff / (1000 * 60 * 60 * 24)
// console.log("Diferença Entre as datas: " + dias  + " Dias")

// function reverseString(str) {
//     //split transforma a string em um array
//     //reverse inverte a ordem dos elementos do array
//     //join transforma o array em uma string novamente

//     return str.split("").reverse().join("")
// }
// console.log(reverseString("Olá, mundo!"))



// function DiaFormatar() {  
//     let DiaAno = new Date()
//     let dia = DiaAno.getDate().toString().padStart(2, '0')
//     //padStart adiciona 0 a esquerda
//     let mes = (DiaAno.getMonth() + 1).toString().padStart(2, '0')
//     //getMonth começa do 0, então adicionamos 1
//     //padStart adiciona 0 a esquerda
//     let ano = DiaAno.getFullYear().toString()

//     return `${dia}/${mes}/${ano}`
// }

// console.log(DiaFormatar())

const prompt = require('prompt-sync')()

// console.log("Gerar um número aleatório entre dois valores")
// let v1 = parseInt(prompt("Digite o primeiro valor: "))
// let v2 = parseInt(prompt("Digite o segundo valor: "))
// function NumeroAleatorio(v1, v2) {
//     let num = Math.floor(Math.random() * (v2 - v1 + 1)) + v1
//     return num
// }

// console.log("O número aleatório é: " + NumeroAleatorio(v1, v2))

// let v1 = prompt("Digite alguma palavra: ")

// function Vogais(v1) {
//     let vogais = v1.match(/[aeiou]/gi)
//     return vogais ? vogais.length : 0
// }

// console.log("A quantidade de vogais é: " + Vogais(v1))

// somar tudo dentro de um array
// let array = [1, 2, 3, 4, 5]
// let soma = array.reduce((a, b) => a + b, 0)

// console.log("A soma é: " + soma)