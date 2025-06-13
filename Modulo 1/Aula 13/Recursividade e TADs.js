// function fatorial(n){
//     if(n === 0){
//         return 1
//     }
//     else {
//         return n * fatorial(n - 1)
//     }
// }

// function fibonacci(n){
//     if (n === 0){
//         return 0
//     }
//     else if (n === 1){
//         return 1
//     }
//     else {
//         return fibonacci(n - 1) + fibonacci(n - 2)
//     }
// }

// console.log(fibonacci(6))

const categorias = [{
    id: 1,
    nome: "eletronicos",
    filhos: [
        {id: 2, nome: "celulares", filhos: []},
        {id: 3, nome: "notebooks", filhos: [
            {id: 4, nome: "computadores", filhos: []}
        ]},
    ],
},
{
    id: 5,
    nome: "roupas",
    filhos: []
}]

function exibirCategorias(lista, nivel = 0){
    for(let categoria of lista){
        console.log(" ".repeat(nivel * 2) + categoria.nome);
        if(categoria.filhos.length > 0){
            // Chamada recursiva para exibir os filhos da categoria
            exibirCategorias(categoria.filhos, nivel + 1);
        }
    }

}

exibirCategorias(categorias);
// A função exibirCategorias percorre a lista de categorias e exibe cada categoria com a indentação apropriada.




// TADs são estruturas de dados que encapsulam dados e operações relacionadas. 
// Elas permitem que você crie tipos de dados personalizados com métodos para manipular esses dados.
// Por exemplo, você pode criar um TAD para representar uma pilha (stack) ou uma fila (queue).



