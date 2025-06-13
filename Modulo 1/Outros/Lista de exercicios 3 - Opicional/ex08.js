// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.


const prompt = require('prompt-sync')();

let HrsAttFisica = prompt('Quantas horas de atividade fisica você teve no mês: ');
let Pontos = 0;
let Dinheiro = 0;

if (HrsAttFisica <= 10) {
    Pontos = HrsAttFisica * 2;
}
else if (HrsAttFisica > 10 && HrsAttFisica <= 20) {
    Pontos = HrsAttFisica * 5;
}
else if (HrsAttFisica > 20) {
    Pontos = HrsAttFisica * 10;
}

Dinheiro = Pontos * 0.05;
console.log(`Você teve ${Pontos } pontos esse mês e ganhou R$ ${Dinheiro.toFixed(2)}`);