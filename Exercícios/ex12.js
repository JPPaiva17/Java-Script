// 12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    else{
        return numero*fatorial(numero-1)
    }
}

// Testes
console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1
console.log(fatorial(1)); // 1
console.log(fatorial(7)); // 5040
console.log(fatorial(10)); // 3628800

