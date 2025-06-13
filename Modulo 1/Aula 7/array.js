let ListaFrutas = [] // Cria uma lista vazia
1
ListaFrutas[0] = "Maçã" // Adiciona o valor "Maçã" na posição 0
ListaFrutas[1] = "Banana" // Adiciona o valor "Banana" na posição 1
ListaFrutas[2] = "Laranja" // Adiciona o valor "Laranja" na posição 2

//console.log(ListaFrutas) // Exibe a lista completa
//console.log(ListaFrutas[0] + ", " + ListaFrutas[1]) // Exibe o valor da posição


//console.table(ListaFrutas) // Exibe a lista em formato de tabela
//console.log(ListaFrutas.length) // Exibe o tamanho da lista

ListaFrutas.push("Uva") // Adiciona o valor "Uva" na última posição
ListaFrutas.unshift("Abacaxi") // Adiciona o valor "Abacaxi" na primeira posição
ListaFrutas.pop() // Remove o último valor da lista
ListaFrutas.shift() // Remove o primeiro valor da lista



for (let i = 0; i < ListaFrutas.length; i++) { // Loop para percorrer a lista
    console.log(ListaFrutas[i] + " na posição: "+ i) // Exibe o valor da posição
}
