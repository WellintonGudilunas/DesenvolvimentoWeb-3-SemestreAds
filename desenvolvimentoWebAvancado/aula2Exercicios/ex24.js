/*
Ex 4. Elabore um programa que leia um vetor de 5 elementos e um número n qualquer. Mostre na tela o índice 
dos elementos que são inferiores a n
*/
const prompt = require('prompt-sync')();

let arrayNumerico = [];
for(let index = 0; index < 5; index++){
    let numDigitado = Number(prompt("Digite o número " + (index + 1) + ": "));
    arrayNumerico.push(numDigitado);    
}

let numAleatorio = Number(prompt("Digite um número aleatório: "));

for(let index = 0; index < arrayNumerico.length; index++){
    if(arrayNumerico[index] < numAleatorio)
        console.log(`O número ${arrayNumerico[index]} que está na posição ${index} é MENOR que ${numAleatorio}`);
    else continue;
}