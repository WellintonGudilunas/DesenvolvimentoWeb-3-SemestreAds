/*
Ex 12. Escreva um algoritmo que receba o número do mês e mostre o mês correspondente. Valide mês inválido.
*/
const prompt = require('prompt-sync')();
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let mesEscolhido = Number(prompt("Digite o número do Mês desejado: "));

for (let i = 0; i < meses.length; i++){
    if(mesEscolhido < 1 || mesEscolhido > 12){
      console.log(`O número ${mesEscolhido} é inválido.`);
       break;
    } else {
      console.log(meses[mesEscolhido - 1]);
      break;
    }
  }