/*
Escreva um algoritmo que leia um número digitado pelo usuário e mostre a mensagem “Número maior do
que 10! ”, caso este número seja maior, ou “Número menor ou igual a 10! ”, caso este número seja menor ou igual
*/
const prompt = require('prompt-sync')();
let n1 = Number(prompt("Digite um número: "));
console.log(n1 > 10 ? "Número maior que 10" : "Número menor ou igual a 10");