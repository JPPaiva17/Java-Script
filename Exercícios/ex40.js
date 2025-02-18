/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

function conceitoNotas(vetor){
    for(notas of vetor){
        if(notas < 5){
            console.log(`${notas}: Conceito D`)
        }
        else if(notas < 7){
            console.log(`${notas}: Conceito C`)
        }
        else if(notas < 9){
            console.log(`${notas}: Conceito B`)
        }
        else if(notas <= 10){
            console.log(`${notas}: Conceito A`)
        }
        else{
            console.log(`${notas}: Nota inválida`)
        }
        
    }
}


let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
conceitoNotas(notas)