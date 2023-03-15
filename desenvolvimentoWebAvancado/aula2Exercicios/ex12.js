/*
Ex 12. Escreva um algoritmo que receba o número do mês e mostre o mês correspondente. Valide mês inválido.
*/
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let mesEscolhido = 13;


for (let i = 0; i < meses.length; i++){
    if(mesEscolhido < 1 || mesEscolhido > 12){
      console.log(`O número ${mesEscolhido} é inválido`);
       break;
    } 
    console.log(meses[mesEscolhido - 1]);
}