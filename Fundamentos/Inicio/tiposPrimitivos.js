// Tipo Number
let numeroInteiro = 42;
let numeroDecimal = 3.14;
let numeroNegativo = -7;
let infinitoPositivo = Infinity;
let naoNumerico = NaN; // Resultado de operações inválidas

console.log("Tipo Number:");
console.log("Inteiro:", numeroInteiro);
console.log("Decimal:", numeroDecimal);
console.log("Negativo:", numeroNegativo);
console.log("Infinito positivo:", infinitoPositivo);
console.log("NaN (Not-a-Number):", naoNumerico);
console.log("Tipo de 'numeroInteiro':", typeof numeroInteiro); // "number"
console.log("\n");

// Tipo String
let textoSimples = 'Olá';
let textoDuplo = "Mundo";
let textoTemplate = `Bem-vindo!`;

console.log("Tipo String:");
console.log("Texto com aspas simples:", textoSimples);
console.log("Texto com aspas duplas:", textoDuplo);
console.log("Texto com template literal:", textoTemplate);
console.log("Tipo de 'textoSimples':", typeof textoSimples); // "string"
console.log("\n");

// Tipo Boolean
let verdadeiro = true;
let falso = false;

console.log("Tipo Boolean:");
console.log("Verdadeiro:", verdadeiro);
console.log("Falso:", falso);
console.log("Tipo de 'verdadeiro':", typeof verdadeiro); // "boolean"
console.log("\n");

// Tipo Undefined
let indefinido; // Variável declarada sem valor

console.log("Tipo Undefined:");
console.log("Valor de 'indefinido':", indefinido); // undefined
console.log("Tipo de 'indefinido':", typeof indefinido); // "undefined"
console.log("\n");

// Tipo Null
let nulo = null; // Ausência intencional de valor

console.log("Tipo Null:");
console.log("Valor de 'nulo':", nulo);
console.log("Tipo de 'nulo':", typeof nulo); // "object" (peculiaridade do JavaScript)
console.log("\n");

// Tipo Symbol
let simbolo1 = Symbol("descricao");
let simbolo2 = Symbol("descricao"); // Cada símbolo é único, mesmo com a mesma descrição

console.log("Tipo Symbol:");
console.log("Símbolo 1:", simbolo1);
console.log("Símbolo 2:", simbolo2);
console.log("Símbolos iguais?", simbolo1 === simbolo2); // false
console.log("Tipo de 'simbolo1':", typeof simbolo1); // "symbol"
console.log("\n");

// Tipo BigInt
let numeroGrande = 123456789012345678901234567890n; // Note o 'n' no final
let somaBigInt = numeroGrande + 10n; // Operações com BigInt exigem que os valores sejam BigInt

console.log("Tipo BigInt:");
console.log("Número grande:", numeroGrande);
console.log("Soma com BigInt:", somaBigInt);
console.log("Tipo de 'numeroGrande':", typeof numeroGrande); // "bigint"
console.log("\n");
