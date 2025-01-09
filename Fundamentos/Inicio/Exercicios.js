// Alguns exercicios básicos

// Qual é o tamanho da area de um Círculo de Raio = 10 cm
console.log("Qual é o tamanho da area de um Círculo de Raio = 10 m");
const PI = Math.PI;
let raio = 10;
let area = raio*raio*PI;
console.log(`A área do círculo de raio ${raio} é igual a ${area.toFixed(2)} m² `);
console.log(" ");

// Trocar valores de variaveis

let a = 7;
let b = 94;

console.log(`Troque o valor da variavel a = ${a} para o valor da variavel b = ${b}`)

let temp = a;
a = b;
b = temp;

console.log(`Variavel A: ` + a);
console.log(`Variavel B: ` + b);
console.log("");

let a2 = 16;
let b2 = 77;

console.log(`Antes da troca: a2 = ${a2}, b2 = ${b2}`);

[a2, b2] = [b2, a2];

console.log(`Depois da troca: a2 = ${a2}, b2 = ${b2}`);
