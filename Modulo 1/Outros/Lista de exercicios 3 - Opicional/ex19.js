// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require("prompt-sync")()

let horarios = []

for (let i = 0; i < 5; i++) {
    let hora = parseInt(prompt("Digite a hora (0-23): "))
    let min = parseInt(prompt("Digite os minutos (0-59): "))
    let seg = parseInt(prompt("Digite os segundos (0-59): "))

    while (hora < 0 || hora > 23 || min < 0 || min > 59 || seg < 0 || seg > 59) {
        console.log("Horário inválido. Tente novamente.")
        hora = parseInt(prompt("Digite a hora (0-23): "))
        min = parseInt(prompt("Digite os minutos (0-59): "))
        seg = parseInt(prompt("Digite os segundos (0-59): "))
    }
    horarios.push({ hora, min, seg })
}

console.log("Horários: ")
for (let i = 0; i < horarios.length; i++) {
    let h = String(horarios[i].hora).padStart(2, '0')
    let m = String(horarios[i].min).padStart(2, '0')
    let s = String(horarios[i].seg).padStart(2, '0')
    console.log(`${h}:${m}:${s}`)
}