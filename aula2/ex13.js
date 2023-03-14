/*
Ex 13. Escreva um algoritmo que leia valores REAIS nas variáveis A e B e o tipo de operador em outra variável do
tipo CARACTERE. Imprima o resultado da operação de A por B se o operador aritmético for válido; caso contrário
deve ser impresso uma mensagem de operador não definido. Tratar erro de divisão por zero.
*/
function main(){
  let a = 20, b = 20;
  let operadores = ["+", "-", "*", "/", "**"];
  let operador = "+";


    if(operadores.indexOf(operador) != -1){
      console.log("Existe");
    } else {
      console.log("Operador não definido");
      return;
    }

    if (operador === "/"){
      if(a == 0 || b == 0){
        console.log("Você não pode dividir por 0");
        return;
      }
    }
    const operacao = a + operador + b;
    console.log(eval(operacao));
    
}
main();




