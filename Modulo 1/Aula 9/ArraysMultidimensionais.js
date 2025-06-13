// const prompt = require('prompt-sync')()

// let PC = Array()
// PC['hardware'] = Array()
// PC['Software'] = Array()

// for(let i = 0; i < 5; i++) {
// const infoPC = prompt('Digite um hardware: ')
// PC['hardware'].push(infoPC)
// }

// for(let i = 0; i < 5; i++) {
// const infoFilmes = prompt('Digite um Sofware: ')
// PC['Software'].push(infoFilmes)
// }

// console.table(PC)
// const prompt = require('prompt-sync')()

// let Numeros = []

// function ordenarArray(Numeros){
// for(let i = 0; i < Numeros.length; i++) {
//     for(let j = 0; j < Numeros.length - 1; j++) {
//         if(Numeros[j] > Numeros	[j + 1]) {
//             let temp = Numeros[j];
//             Numeros[j] = Numeros[j + 1];
//             Numeros[j + 1] = temp;
//         }
//     }
// }

//     return Numeros.sort((a, b) => a.localeCompare(b))

// }

// Numeros = ["felipe", "andre", "joao", "maria", "jose"]


// console.log("Os numeros informados foram" + Numeros)
// Array = ordenarArray(Numeros)
// console.log("Os numeros informados ordenados" + Array)

// let teste = (teste) => { console.log(teste) }

// teste("kkkkk1")


// exercicio 1. um array de 5 posições, uma função q receba o array e retorne a soma dos elementos

let Numeros = []

for(let i = 0; i < 5; i++) {
    Numeros[i] = Math.floor(Math.random() * 101)
}

let maiorNumeroArr = (Numeros) => { 
    let maior = Numeros[0]
    for(let i = 0; i < Numeros.length; i++) {
        if(Numeros[i] > maior) {
            maior = Numeros[i]
        }
    }
    return maior
}

let somarArray = (Numeros) => {
    let soma = 0
    for(let i = 0; i < Numeros.length; i++) {
        soma += Numeros[i]
    }
    return soma
}

let ParImparr = function(valor) {
    let Resultado
        if(valor % 2 == 0) {
            Resultado = "Par"
        } else {
            Resultado = "Impar"
        }
    return Resultado
}

function ParImpar (Numeros, callback) {
    let Pares = []
    for(let i = 0; i < Numeros.length; i++) {
        let resultado = callback(Numeros[i])
        if(resultado == "Par") {
            Pares.push(Numeros[i])
        }
    }
    return Pares
}

console.log("Os numeros informados foram " + Numeros)
console.log("A soma dos numeros informados é " + somarArray(Numeros))
console.log("O maior numero informado é " + maiorNumeroArr(Numeros))
console.log("Os numeros Pares são " + ParImpar(Numeros, ParImparr ))