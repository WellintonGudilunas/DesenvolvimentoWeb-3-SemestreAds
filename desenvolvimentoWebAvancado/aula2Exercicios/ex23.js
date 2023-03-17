/*
Ex 3. Faça um programa que leia 5 números do teclado e os armazene em um vetor. Crie um segundo vetor que 
armazene o dobro de cada um dos números do primeiro vetor e apresente este vetor

*/

const prompt = require('prompt-sync')();

let arrayNumerico = [];
for(let index = 0; index < 5; index++){
    let numDigitado = Number(prompt("Digite o número " + (index + 1) + ": "));
    arrayNumerico.push(numDigitado);    
}

let arrayDuplicado = arrayNumerico.map(elemento => elemento * 2);
console.log("ARRAY NORMAL: " + arrayNumerico);
console.log("ARRAY DUPLICADO: " + arrayDuplicado);
