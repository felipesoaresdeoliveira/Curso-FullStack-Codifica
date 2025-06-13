//arrays multidimensionais oq é? e qual diferença entre array? 
// Array multidimensional é um array que contém outros arrays como elementos.
// Isso permite armazenar dados em várias dimensões, como uma tabela ou uma matriz.
// A diferença entre um array unidimensional e um multidimensional é que o primeiro é uma lista simples de elementos, enquanto o segundo é uma lista de listas.
// Exemplo de array unidimensional

// let arrayUnidimensional = [1, 2, 3, 4, 5];
// // Exemplo de array multidimensional
// let arrayMultidimensional = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
let matriz = []
for(let i = 0; i < 10; i++){
    matriz[i] = []
    for(let j = 0; j < 10; j++){
        matriz[i][j] = 10
    }
}

console.table(matriz)

//calcular a diagonal de uma matriz

let somaDiagonal = 0

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        if(i == j){
            somaDiagonal += matriz[i][j]
        }
    }
}

console.log("A soma da diagonal é: " + somaDiagonal)