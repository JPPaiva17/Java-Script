/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function crescimentoCrianca(altura1, altura2, taxa1, taxa2){
    let anos = 0;

    if(altura1 < altura2){
        while(altura1 < altura2){
            altura1 += taxa1
            altura2 += taxa2
            anos += 1
        }
    }
    else if(altura2 < altura1){
        while(altura1 > altura2){
            altura1 += taxa1
            altura2 += taxa2
            anos += 1
        }
    }

    return anos
}

console.log(crescimentoCrianca(150, 130, 2, 4));