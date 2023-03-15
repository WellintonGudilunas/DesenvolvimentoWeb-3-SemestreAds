/*
Escreva um algoritmo que leia dois números e ao final mostre a soma, subtração, mul�plicação e a divisão
dos números lidos.
*/
const prompt = require('prompt-sync')();
let x = Number(prompt("Digite o primeiro número: "))
let y = Number(prompt("Agora, digite o segundo número: "));

console.log(`A soma de ${x} mais ${y} é: ${x + y}`);
console.log(`A subtração de ${x} menos ${y} é: ${x - y}`);
console.log(`A multiplicação de ${x} vezes ${y} é: ${x * y}`);
console.log(`A divisão de ${x} por ${y} é: ${x / y}`);

