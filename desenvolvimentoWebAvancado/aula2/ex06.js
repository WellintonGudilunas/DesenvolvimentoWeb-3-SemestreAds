/*
Ler uma temperatura em graus Celsius e apresentá-la conver�da em graus Fahrenheit.
*/
const prompt = require('prompt-sync')();
let temperadoraEmGrausCelsius = Number(prompt("Digite a temperatura em °C: "));
let temperadoraEmFahrenheit = (temperadoraEmGrausCelsius * 1.8) + 32;
console.log(`${temperadoraEmGrausCelsius} em Fahrenheit é: ${temperadoraEmFahrenheit}.`);

