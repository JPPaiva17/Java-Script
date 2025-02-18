/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/

function menorMaior(vetor){
    vetor.sort((a, b) => a - b); // Ordena o vetor em ordem crescente
    console.log(`Menor: ${vetor[0]}, Maior: ${vetor[vetor.length - 1]}`);
}

vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];
menorMaior(vetor);
