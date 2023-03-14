/*
Ex 20. Elabore um algoritmo que calcule a quantidade de litros de combustível gasta em uma viagem, utilizando
um automóvel que faz 12km por litro e considerando que são fornecidos o tempo em hora e a velocidade média da
viagem.
*/

let consumoPorKm = 12;
let tempoEmHoras = 2;
let velocidadeMedia = 80;

let gasto = (velocidadeMedia * tempoEmHoras) / 12

console.log(Math.floor(gasto) + " Litros")