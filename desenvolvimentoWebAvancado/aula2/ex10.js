/*
Ex 10. Escreva um algoritmo que leia um número de 1 a 5 e escreva-o por extenso. Caso o usuário digite um
valor que não esteja neste intervalo, exibir a mensagem: “Número inválido! ”.
*/
let x = 1;

if(x < 1 || x > 5)
  console.log(`O número ${x} é um número inválido.`);
else if (x === 1) 
  console.log("Um");
else if (x === 2)
  console.log("Dois");
else if (x === 3)
  console.log("Três");
else if (x === 4)
  console.log("Quatro");
else if (x === 5)
  console.log("Cinco");
