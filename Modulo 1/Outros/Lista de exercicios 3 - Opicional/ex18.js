// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

const prompt = require("prompt-sync")()

let funcionarios = {
    nome: "",
    cargo: "",
    salario: 0
}
    funcionarios.nome = prompt("Digite o nome do funcionário: ")
    funcionarios.cargo = prompt("Digite o cargo do funcionário: ")
    funcionarios.salario = parseFloat(prompt("Digite o salário do funcionário: "))

console.log(`\nFuncionário cadastrado
Nome: ${funcionarios.nome}
Cargo: ${funcionarios.cargo}
Salário: R$ ${funcionarios.salario.toFixed(2)}
`);
