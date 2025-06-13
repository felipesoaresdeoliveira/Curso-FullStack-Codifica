let Idades = [60, 18, 14, 56, 89, 7, 45, 13, 10];

for(let i = 0; i < Idades.length; i++) {
    for(let j = 0; j < Idades.length - 1; j++) {
        if(Idades[j] > Idades[j + 1]) {
            let temp = Idades[j];
            Idades[j] = Idades[j + 1];
            Idades[j + 1] = temp;
        }
    }
}

//soma de todos os elementos do array
let soma = 0;
for (let i = 0; i < Idades.length; i++) {
    soma += Idades[i];
}

let media = soma / Idades.length;

let pares = [];
let impares = [];

//separar os elementos pares e ímpares
for (let i = 0; i < Idades.length; i++) { 
    if (Idades[i] % 2 == 0) {
        pares.push(Idades[i]);
    } else {
        impares.push(Idades[i]);
    }
}

console.log("array original: " + Idades);
console.log("A soma é: " + soma);
console.log("A média é: " + Math.round(media));
console.log("Os números pares são: " + pares);
console.log("Os números ímpares são: " + impares);