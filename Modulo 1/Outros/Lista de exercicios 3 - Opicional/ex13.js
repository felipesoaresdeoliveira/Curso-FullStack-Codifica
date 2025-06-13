// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci.

let fib = [0, 1]

for (let i = 2; i < 15; i++){
    fib[i] = fib[i - 1] + fib[i - 2]
}

console.log(fib)