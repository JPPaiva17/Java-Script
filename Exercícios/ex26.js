/*
26) Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function paresAte100(){
    let pares = []

    for(let i = 1; i <= 100; i++){
        if(i%2 == 0){
            pares.push(i);
        }
    }

    console.log(pares)
}

paresAte100()