/*
Ex 9. Leia dois números nas variáveis A e B e iden�fique se os valores são iguais ou diferentes. Caso eles sejam
iguais imprima uma mensagem dizendo que são iguais. Caso sejam diferentes, informe que são diferentes e qual
número é o maior
*/
const prompt = require('prompt-sync')();
let a = Number(prompt("Digite o primeiro número: "))
let b = Number(prompt("Agora, digite o primeiro número: "));

if(a == b && typeof a === typeof b)
  console.log("Os números são iguais");
else 
  console.log(`Os números ${a} e ${b} são diferentes E ${a > b ? a : b} é o maior`)


