const prompt = require('prompt-sync')()

console.log("bem-vindo a tabuada!")
console.log("Digite um número para ver a tabuada dele!")
let n1 = parseInt(prompt("Digite qual tabuada você quer: "))

console.log("A tabuada do " + n1 + " é: ")

let resultado = 0
let i = 1


// while (i <= 10) {
//    resultado = n1 * i
//      console.log(n1 + " x " + i + " = " + resultado)
//      i++
// }

for (let i = 1; i <= 10; i++){
    resultado = n1 * i
    console.log(n1 + " x " + i + " = " + resultado)

    if(i === 10){
       let continuar = prompt("deseja continuar com outro numero? (s/n): ")
       if(continuar === "s"){
        n1 = parseInt(prompt("Digite qual tabuada você quer: "))
        i = 0
       }
       else if(continuar === "n"){
        console.log("obrigado por usar a tabuada!")
        break
    }
}
}

// do {
//     resultado = n1 * i
//     console.log(n1 + " x " + i + " = " + resultado)
//     i++
// }
// while (i <= 10) 