//console.log("Hello World!");
//let name = "felipe"
//let idade = 18


//oq é o let? 
// let é uma palavra reservada do javascript que serve para declarar variaveis, ou seja, guardar valores em memoria.

//const é ultilizado em chaves API ou variaveis que não podem ser alteradas. 

/*
let idade = 18
let idade2 = 21

console.log(idade + idade2) //somando as variaveis idade e idade2, o resultado é 39
console.log(idade - idade2) //subtraindo as variaveis idade e idade2, o resultado é -3
console.log(idade * idade2) //multiplicando as variaveis idade e idade2, o resultado é 378	
console.log(idade / idade2) //dividindo as variaveis idade e idade2, o resultado é 0.8571428571428571
console.log(idade % idade2) //resto da divisao entre idade e idade2, o resultado é 18
console.log(idade ** idade2) //potencia entre idade e idade2, o resultado é 18^21 = 1.1641532182693481e+24
console.log(idade2 ** idade) //potencia entre idade2 e idade, o resultado é 21^18 = 1.0240000000000002e+23


//() -> maior precedencia
// logo após vem o ** (potenciação)
// depois vem o * e / (multiplicação e divisão)
// e por último vem o + e - (adição e subtração)


console.log(idade + idade2 % 2) //soma entre idade e idade2, o resultado é 39, depois o resto da divisão entre 39 e 2, o resultado é 1


let num = "4"
console.log(num + 2) //concatenando a string num com o numero 2, o resultado é 42
console.log(parseInt(num) + 2) //convertendo a string num para inteiro, o resultado é 6


let counter = 1
counter++ //incrementando o valor de counter em 1, o resultado é 1
console.log(counter) //imprimindo o valor de counter, o resultado é 1
counter-- //decrementando o valor de counter em 1, o resultado é 0
console.log(counter) //imprimindo o valor de counter, o resultado é 0
counter += 2 //incrementando o valor de counter em 2, o resultado é 2
console.log(counter) //imprimindo o valor de counter, o resultado é 2
counter -= 1 //decrementando o valor de counter em 1, o resultado é 1
console.log(counter) //imprimindo o valor de counter, o resultado é 1
counter *= 2 //multiplicando o valor de counter por 2, o resultado é 2
console.log(counter) //imprimindo o valor de counter, o resultado é 2
counter /= 2 //dividindo o valor de counter por 2, o resultado é 1
console.log(counter) //imprimindo o valor de counter, o resultado é 1
counter %= 2 //resto da divisão entre counter e 2, o resultado é 1
console.log(counter) //imprimindo o valor de counter, o resultado é 1 
*/


/*
let counter = 2
let multiplicador = 2

counter += multiplicador 
counter += multiplicador 
counter += multiplicador 
counter += multiplicador 
counter += multiplicador 
counter += multiplicador 
counter += multiplicador 
counter += multiplicador 
counter += multiplicador 
counter += multiplicador 

console.log(counter)
*/

/*
let user = 'Felipe'
let password = '123456'

let auth = user === 'Felipe' && password === '123456'
let auth2 = user === 'felipe' && password === '123456'

console.log(auth) //true
console.log(auth2) //false
*/

let name = 'Felipe'
let age = 18

if (age >= 18 && age <= 35) {
    console.log('olá ' + name + ' voce pode realizar o consurso')
}
else {
    console.log('olá ' + name + ' voce nao pode realizar o consurso')
}

