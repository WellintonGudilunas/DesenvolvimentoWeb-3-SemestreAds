/*
Ex 11. Escreva um algoritmo que leia três valores inteiros dis�ntos e escreva-os em ordem crescente.
*/
const prompt = require('prompt-sync')();
let x = Number(prompt("Digite o primeiro número: "));
let y = Number(prompt("Agora, o segundo número: "));
let z = Number(prompt("Agora, digite o terceiro número: "));
let array = [x, y, z];

const sortfunction = (a, b) => a - b;
array.sort(sortfunction);

for(let i = 0; i < array.length; i++){
  console.log(array[i]);
}