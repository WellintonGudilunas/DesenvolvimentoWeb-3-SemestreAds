/*
Ex 2. Construa um programa que leia um vetor de 5 elementos e calcule a média destes valores. Na seqüência, 
apresente na tela os valores que são iguais ou superiores à média.
*/

const prompt = require('prompt-sync')();

let arrayNumerico = [];
for(let index = 0; index < 5; index++){
    let numDigitado = Number(prompt("Digite a nota " + (index + 1) + ": "));
    arrayNumerico.push(numDigitado);    
}

let media = (arrayNumerico.reduce( (acumulador, elemento) => acumulador += elemento)) / arrayNumerico.length;
console.log("-----------------")
console.log("A média é: " + media);
console.log("-----------------")
for(let index = 0; index < arrayNumerico.length; index++){
    if(arrayNumerico[index] > media)
        console.log(`A nota ${arrayNumerico[index]} é MAIOR que a média (${media})`);
    else if (arrayNumerico[index] < media)
        console.log(`A nota ${arrayNumerico[index]} é MENOR que a média (${media})`);
    else if (arrayNumerico[index] === media)
        console.log(`A nota ${arrayNumerico[index]} IGUAL a média (${media})`);
}
