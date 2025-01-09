// Teste de Variaveis

let qtdCanetas = 10;
let precoCanetas = 1.99;
let imposto = 1.05;

let precoFinal = precoCanetas*imposto;
console.log(`Preço final das ${qtdCanetas} canetas é R$${precoFinal.toFixed(2)}"`);


//Diferença de var e let

if (true) {
    var a = 10;  // Escopo global (ou de função, se dentro de uma função)
    let b = 20;  // Escopo de bloco
}

console.log(a); // 10 (acessível)
console.log(b); // Erro: b is not defined
