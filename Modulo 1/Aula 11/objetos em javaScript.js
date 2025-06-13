// let Serie = {
//     nome: "Supernatural",
//     DataLancamento: 2005,
//     genero: "Terror",
//     sinopse: "Dois irmãos, Sam e Dean Winchester, viajam pelo país caçando criaturas sobrenaturais.",
//     atores: ['Jared Padalecki', 'Jensen Ackles', 'Misha Collins', 'Jim Beaver'],
//     status: 'Finalizada',
//     nota: 8.4,
//     faixaEtaria: '16 anos',
//     temporadas: {
//         temp1: {
//             episodios: 22,
//             sinopse: "Os irmãos Winchester caçam o demônio que matou sua mãe e atormenta suas vidas desde então.",
//             nota: 8.5,
//         },
//         temp2: {
//             episodios: 22,
//             sinopse: "Os irmãos enfrentam novos desafios e criaturas sobrenaturais enquanto tentam salvar o mundo.",
//             nota: 8.7,
//         }
//     },
//     mostrarCaracteristicas: function() {
//     return `Nome: ${this.nome}, Data de Lançamento: ${this.DataLancamento}, Gênero: ${this.genero}, Sinopse: ${this.sinopse}, Atores: ${this.atores.join(', ')}, Status: ${this.status}, Nota: ${this.nota}, Faixa Etária: ${this.faixaEtaria}`;
//     }
// }

// console.log(Serie.mostrarCaracteristicas());

// let teste = [[9, 12, 3], [85, 6, 2], [1, 4, 5], [7, 8, 9]];

//forin

// for (let i in teste) {
//         teste[i].sort((a, b) => a - b)
//     console.log(teste[i])
// }


//forof
// for (let i of Object.keys(teste)) {
//     console.log(i);
// }


// let professor = {
//     nome: "Lucas",
//     idade: 30,
//     disciplina: "Matemática",
//     notas: {
//         aluno1: [5, 8, 9],
//         aluno2: [7, 6, 8],
//         aluno3: [1, 5, 3],
//     }
// }

// let somaNotas = 0
// let numeroEstudantes = 0

// for (let estudantes in professor.notas) {
//     somaNotas += professor.notas[estudantes].reduce((a, b) => a + b, 0) / professor.notas[estudantes].length
//     numeroEstudantes++
// }

// let media = somaNotas / numeroEstudantes
// console.log("A media da turma é: " + media.toFixed(1))

// if (media >= 7) {
//     console.log(`${professor.nome} é um bom professor e está acima da média.`)
// }
// else if (media >= 5) {
//     console.log(`${professor.nome} é um professor mediano e está na média.`)
// } else {
//     console.log(`${professor.nome} é um professor ruim e está abaixo da média.`)
// }
