// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// valores da sequência.

const prompt = require('prompt-sync')();

console.log('Veja a PA (Progressão Aritmética) abaixo:');
const primeiroTermo = parseInt(prompt('Digite o primeiro termo: '));
const razao = parseInt(prompt('Digite a razão: '));

for (let i = 0; i < 10; i++) {
    const termo = primeiroTermo + i * razao;
    console.log(`Termo ${i + 1}: ${termo}`);
}