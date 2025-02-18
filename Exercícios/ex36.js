/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5
*/

function multiplicaVetor(vetor, numero){

    for(i in vetor){
        vetor[i]*= numero;
    }

    console.log(vetor)
    return vetor
}


function multiplicaVetorMaiorQueCinco(vetor, numero){
    if(numero>5){
    for(i in vetor){
        vetor[i]*= numero;
    }}
    else{
        console.log("Numero menor que cinco.")
    }

    console.log(vetor)
    return vetor
}

let vetor = [1,2,3,4,5] 
multiplicaVetor(vetor, 10)
multiplicaVetorMaiorQueCinco(vetor, 3)