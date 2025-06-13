// exercicio 
// verificar dentro de uma lista de livros os q foram publicados depois de 2000

// const livraria = [
//     {titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954, genero: "Fantasia"},
//     {titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", anoPublicacao: 1997, genero: "Fantasia"},
//     {titulo: "O Código Da Vinci", autor: "Dan Brown", anoPublicacao: 2003, genero: "Mistério"},
//     {titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", anoPublicacao: 2005, genero: "Ficção"},
//     {titulo: "O Hobbit", autor: "J.R.R. Tolkien", anoPublicacao: 1937, genero: "Fantasia"},
//     {titulo: "1984", autor: "George Orwell", anoPublicacao: 1949, genero: "Distopia"},
//     {titulo: "O Alquimista", autor: "Paulo Coelho", anoPublicacao: 1988, genero: "Ficção"},
//     {titulo: "A Culpa é das Estrelas", autor: "John Green", anoPublicacao: 2012, genero: "Romance"},
//     {titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", anoPublicacao: 1943, genero: "Fábula"},
//     {titulo: "Orgulho e Preconceito", autor: "Jane Austen", anoPublicacao: 1813, genero: "Romance"},
//     {titulo: "Dom Casmurro", autor: "Machado de Assis", anoPublicacao: 1899, genero: "Romance"},
// ]
   

// const livrosPublicadosDepoisDe2000 = []
// const livrosPublicadosAntesDe2000 = []
// const generosLivros = []


// for (let i of livraria) {
//     if (i.anoPublicacao > 2000) {
//         livrosPublicadosDepoisDe2000.push(i)
//     }
//     else {
//         livrosPublicadosAntesDe2000.push(i)
//     }

//     //ver qual o tipo de genero de cada livro

//     if (!generosLivros.includes(i.genero)) {
//         generosLivros.push(i.genero)
//     }
// }

// console.log("Livros publicados depois de 2000:", livrosPublicadosDepoisDe2000.map(livro => livro.titulo)); 
// console.log("Livros publicados antes de 2000:", livrosPublicadosAntesDe2000.map(livro => livro.titulo));
// console.log("Gêneros dos informados livros:", generosLivros.join(", "));

// exercicio 2
// contar a quantidade de filmes por genero 

// const filmes = [
//     {titulo: "O Senhor dos Anéis: A Sociedade do Anel", genero: "Fantasia"},
//     {titulo: "Harry Potter e a Pedra Filosofal", genero: "Fantasia"},
//     {titulo: "O Código Da Vinci", genero: "Mistério"},
//     {titulo: "A Menina que Roubava Livros", genero: "Ficção"},
//     {titulo: "O Hobbit: Uma Jornada Inesperada", genero: "Fantasia"},
//     {titulo: "1984", genero: "Distopia"},
//     {titulo: "O Alquimista", genero: "Ficção"},
//     {titulo: "A Culpa é das Estrelas", genero: "Romance"},
//     {titulo: "O Pequeno Príncipe", genero: "Fábula"},
//     {titulo: "Orgulho e Preconceito", genero: "Romance"},
//     {titulo: "Dom Casmurro", genero: "Romance"},
//     {titulo: "O Rei Leão", genero: "Animação"},
//     {titulo: "Toy Story", genero: "Animação"},
//     {titulo: "Star Wars: Uma Nova Esperança", genero: "Ficção Científica"},
//     {titulo: "Jurassic Park", genero: "Aventura"},
//     {titulo: "Titanic", genero: "Romance"},
//     {titulo: "Matrix", genero: "Ficção Científica"},
//     {titulo: "O Exorcista", genero: "Terror"},
//     {titulo: "Gladiador", genero: "Ação"},
//     {titulo: "Mad Max: Estrada da Fúria", genero: "Ação"},
//     {titulo: "A Origem", genero: "Ficção Científica"},
//     {titulo: "O Silêncio dos Inocentes", genero: "Terror"},
//     {titulo: "Forrest Gump: O Contador de Histórias", genero: "Drama"},
//     {titulo: "O Lobo de Wall Street", genero: "Comédia"},
//     {titulo: "A Lista de Schindler", genero: "Drama"},
//     {titulo: "Cidadão Kane", genero: "Drama"},
//     {titulo: "Pulp Fiction: Tempo de Violência", genero: "Crime"},
//     {titulo: "O Grande Lebowski", genero: "Comédia"},
//     {titulo: "Clube da Luta", genero: "Drama"},
//     {titulo: "A Rede Social", genero: "Drama"},
//     {titulo: "O Pianista", genero: "Drama"},
// ]

// let generoContagem = {};

// filmes.forEach(filme => {
//     if(generoContagem[filme.genero]) {
//         generoContagem[filme.genero]++;
//     } else {
//         generoContagem[filme.genero] = 1;
//     }
// });

// console.log("Quantidade de filmes por gênero:");
// console.table(generoContagem);



// const contagemGeneros = {};

// for (let filme of filmes) {
//     if (contagemGeneros[filme.genero]) {
//         contagemGeneros[filme.genero]++;
//     } else {
//         contagemGeneros[filme.genero] = 1;
//     }
// }

// console.log("Quantidade de filmes por gênero:");
// for (let genero in contagemGeneros) {
//     console.log(`${genero}: ${contagemGeneros[genero]}`);
// }


// exercicio 3
// calcular a fatorial de um numero

// function calcularFatorial(numero) {
//     let fatorial = 1
//     for (let i = 1; i <= numero; i++) {
//         fatorial *= i
//     }
//     console.log(fatorial)
// }

// calcularFatorial(5) // 120

// imprima os 10 primeiros numeros da sequencia de fibonacci

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

fibonacci(10).forEach(num => console.log(num)); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34