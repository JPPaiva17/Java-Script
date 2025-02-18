/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function vetorQtdParesImpares(vetor){
    let qtdPares = 0;
    let qtdImpares = 0;

    for(let i in vetor){
        if(vetor[i] % 2 == 0){
            qtdPares++;
        }
        else{
            qtdImpares++;
        }
    }

    return `Quantidade de pares: ${qtdPares}   I    Quantidade de impares: ${qtdImpares}`
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(vetorQtdParesImpares(vetor))