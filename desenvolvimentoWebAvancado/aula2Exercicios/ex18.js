/*
Ex 18. Elabore um algoritmo que receba três notas de um aluno e retorne a sua média harmônica.
Exemplo: nota1 = 10.0, nota2 = 5.5, nota3 = 8.0. Média: 7.37
*/


let n1 = 10, n2 = 5.5, n3 = 8;

const mediaHarmonica = 3 / (1/n1 + 1/n2 + 1/n3) 
console.log(`A média harmônica é: ${mediaHarmonica.toFixed(2)}`); 