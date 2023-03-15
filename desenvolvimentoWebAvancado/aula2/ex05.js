/*
Leia valores nas variáveis A e B, e efetue a troca dos valores de forma que o valor da variável A passe a ser
o valor da variável B e o valor da variável B passe a ser o valor da variável A. Apresentar uma mensagem com o
valor original de cada variável e outra com os valores trocados.
*/
const prompt = require('prompt-sync')();
let a = Number(prompt("Digite o primeiro número: "));
let b = Number(prompt("Agora, digite o primeiro número: "));
let aNovo = b, bNovo = a;
console.log(`A original: ${a}, B original: ${b}`);
console.log(`A trocado: ${aNovo}, B trocado: ${bNovo}`);
