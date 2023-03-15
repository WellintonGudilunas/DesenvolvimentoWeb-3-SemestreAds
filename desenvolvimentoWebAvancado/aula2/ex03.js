/*
Escreva um algoritmo que leia os valores de dois números inteiros dis�ntos nas variáveis A e B e informe
qual deles é o maior. Caso os números sejam iguais informar ao usuário que a sequência de números informados é
inválida.
 */ 
const prompt = require('prompt-sync')();
let a = Number(prompt("Digite o primeiro número: "));
let b = Number(prompt("Agora, digite o segundo número: "));
if(a == b || typeof a !== "number" || typeof b !== "number")
  console.log("A sequência de números informados é inválida.");
else if (a > b)
  console.log(`O maior número é ${a}`);
else if (a < b)
  console.log(`O maior número é ${b}`);

