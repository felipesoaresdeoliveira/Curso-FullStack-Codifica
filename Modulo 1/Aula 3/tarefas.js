//exercicio 1: verificar se o numero é par ou impar 

let num = 100

if (num % 2 == 0) {
    console.log('par')
}
else {
    console.log('impar')
}

let result = num % 2 == 0 ? 'par' : 'impar'
console.log(result) //par

//exercicio 2: encontre o maior dos 3 numeros

let num1 = 101
let num2 = 200
let num3 = 30

if(num1 > num2 && num3 < num1){
    console.log('O maior numero é: ' + num1)
}
else if (num1 < num2 && num3 < num2){
    console.log('O maior numero é: ' + num2)
}
else if (num1 < num3 && num2 < num3){
    console.log('O maior numero é: ' + num3)
}
else {
    console.log('numeros iguais')
}

