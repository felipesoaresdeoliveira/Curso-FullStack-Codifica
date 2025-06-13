const prompt = require('prompt-sync')()

function soma(valor1, valor2) {
    let resultado = valor1 + valor2
    return resultado
}

function ParImpar(resultado) {

    let Parimpar

    if (resultado % 2 == 0) {
        Parimpar =  "Par"
    } else {
        Parimpar = "Impar"
    }

    return Parimpar
}


let valor1 = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite o segundo valor: "))

let resultado = soma(valor1, valor2)
let n1 = ParImpar(resultado)

console.log("A soma é: " + resultado)
console.log("O ele é: " + n1)