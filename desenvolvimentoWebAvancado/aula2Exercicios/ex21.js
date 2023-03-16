/*
Ex 21. Escreva um algoritmo que leia uma sequência finita de números e mostre posi�vo, nega�vo ou zero para 
cada número.
*/

const prompt = require('prompt-sync')();

let quantidadeNumeros = Number(prompt("Digite a quantidade de números que o array terá: "));

let arrayNumerico = [];
for(let index = 0; index < quantidadeNumeros; index++){
    let numDigitado = Number(prompt("Digite o número " + (index + 1) + ": "));
    arrayNumerico.push(numDigitado);    
}

for(let index = 0; index < arrayNumerico.length; index++){
    if(arrayNumerico[index] > 0)
        console.log(`O número ${arrayNumerico[index]} é Positivo`);
    else if (arrayNumerico[index] < 0)
        console.log(`O número ${arrayNumerico[index]} é Negativo`);
    else console.log(`O número é 0`);
}
