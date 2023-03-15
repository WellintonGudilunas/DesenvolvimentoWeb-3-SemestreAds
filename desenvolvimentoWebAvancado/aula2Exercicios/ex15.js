/*
Ex 15. Tendo como dados de entrada dois pontos quaisquer no plano, P1(x1, y1) e P2(x2,y2), calcule e retorne a
distância entre eles. A fórmula que efetua tal cálculo é: d = raiz ( ( ( x2 - x1 ) ^ 2 ) + ( ( y2 - y1 ) ^ 2 ) )
Exemplo: p1(0, 5), p2(10, 20). Distancia: 18,03
*/


let x1 = 0, y1 = 5;
let x2 = 10, y2 = 20;

let distancia = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

console.log(`A distância é: ${distancia}`);
