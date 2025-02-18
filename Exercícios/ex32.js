// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaAritmetica(vetor){
    let soma = 0;
    for(let i in vetor){
        soma+= vetor[i]
    }

    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaAritmetica(vetor))