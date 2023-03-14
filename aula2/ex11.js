/*
Ex 11. Escreva um algoritmo que leia três valores inteiros dis�ntos e escreva-os em ordem crescente.
*/

let x = [10000, 600, 3200];

const sortfunction = (a, b) => a - b;
x.sort(sortfunction);

for(let i = 0; i < x.length; i++){
  console.log(x[i])
}