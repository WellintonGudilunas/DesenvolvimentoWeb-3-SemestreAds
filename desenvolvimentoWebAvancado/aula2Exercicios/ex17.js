/*
Ex 17. Elabore um algoritmo que receba três notas de um aluno os pesos referentes a cada nota e retorne a sua
média ponderada.
Cálculo da média ponderada:
nota1 * peso1 + nota2 * peso2 + nota3 * peso3
peso1 + peso2 + peso3
Exemplo: nota1 = 10.0, nota2 = 5.5, nota3 = 8.0, peso1 = 5, peso2 = 3, peso3 = 2. Média: 8.25
*/

let n1 = 10, n2 = 5.5, n3 = 8.0;
let peso1 = 5, peso2 = 3, peso3 = 2;

const mediaPonderada = ((n1 * peso1) + (n2 * peso2) + (n3 * peso3)) / (peso1 + peso2 + peso3);

console.log(`A média ponderada é: ${mediaPonderada}`);
