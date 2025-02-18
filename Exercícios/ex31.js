/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function numerosNegativos (vetor){
    let qtdNumerosNegativos = 0;

    for(let i in vetor){
        if(vetor[i]< 0){
            qtdNumerosNegativos++;
        }
    }

    console.log(qtdNumerosNegativos)
}


vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

numerosNegativos(vetor)