/*
29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function intervalo1020(vetor){
    
    let dentro = 0;
    let fora = 0;

    for(let i in vetor){
        if(10 <= vetor[i] && vetor[i]<= 20){
            dentro++;
        }
        else{
            fora++;
        }
    }

    return `Dentro do intervalo: ${dentro}, Fora do intervalo: ${fora}`
}


vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
console.log(intervalo1020(vetor))