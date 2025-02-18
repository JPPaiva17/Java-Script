/*
18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function numeroPorExtenso(numero){
    switch(numero){
        case 0:
            return "Zero"
        case 1:
            return "Um"
        case 2:
            return "Dois"
        case 3:
            return "Três"
        case 4:
            return "Quatro"
        case 5:
            return "Cinco"
        case 6:
            return "Seis"
        case 7:
            return "Sete"
        case 8:
            return "Oito"
        case 9:
            return "Nove"
        case 10:
            return "Dez"
        default:
            return "Fora do Intervalo"
    }
}

console.log(numeroPorExtenso(0),
numeroPorExtenso(1),
numeroPorExtenso(2),
numeroPorExtenso(3),
numeroPorExtenso(4),
numeroPorExtenso(5),
numeroPorExtenso(6),
numeroPorExtenso(7),
numeroPorExtenso(8),
numeroPorExtenso(9),
numeroPorExtenso(10),
numeroPorExtenso(11))
