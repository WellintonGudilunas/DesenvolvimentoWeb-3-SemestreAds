/*
Escreva um algoritmo que leia os valores de dois números inteiros dis�ntos nas variáveis A e B e informe
qual deles é o maior. Caso os números sejam iguais informar ao usuário que a sequência de números informados é
inválida.
 */ 

let a = 10, b = 20;
if(a == b || typeof a !== "number" || typeof b !== "number")
  console.log("A sequência de números informados é inválida.");
else if (a > b)
  console.log(`O maior número é ${a}`);
else if (a < b)
  console.log(`O maior número é ${b}`);

