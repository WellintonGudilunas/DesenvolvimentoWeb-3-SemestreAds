//Escreva um algoritmo que leia dois números digitados pelo usuário e exiba o resultado da sua soma.
const prompt = require('prompt-sync')();
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Agora, digite o segundo número: "));
console.log(typeof n1);
console.log(`A soma de ${n1} + ${n2} É: ${n1 + n2}`);