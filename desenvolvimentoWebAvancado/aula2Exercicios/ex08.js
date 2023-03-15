/*
Ex 8. Escreva um algoritmo que leia um número e mostre uma mensagem caso este número seja maior ou igual
a 50, outra se ele for menor que 50.
*/
const prompt = require('prompt-sync')();
let x = Number(prompt("Digite um número: "));
console.log(x >= 50 ? `${x} é maior ou igual a 50` : `${x} é menor que 50`);