/*
Ex 19. Faça um algoritmo que receba o raio e a altura de um cilindro e retorne o seu volume calculado de acordo
com a seguinte fórmula: volume = 3.14 * raio2 * altura;
Exemplo: raio = 10, altura = 15. Volume = 4710
*/
const prompt = require('prompt-sync')();
let raio = prompt("Digite o raio: ");
let altura = prompt("Digite a altura: ");
let volume = 3.14 * Math.pow(raio, 2) * altura;
console.log(`Volume calculado: ${volume}`);