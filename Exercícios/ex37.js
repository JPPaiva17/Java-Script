/*
37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function progressaoAritmetica(n, a1, r){
    let an;
    let somaTotal = 0;

    for(let i = 0; i < n; i++){
        an = a1 + (i-1)*r
        console.log(an)
        somaTotal += an
    }

    console.log(`Soma total: ${somaTotal}`)


}

function progressaoGeometrica(n, a1, r){
    let an;
    let somaTotal = 0;

    for(let i = 0; i < n; i++){
        an = a1 * (r**i)
        console.log(an)
        somaTotal += an
    }

    console.log(`Soma total: ${somaTotal}`)
}

progressaoAritmetica(5, 1, 1)
progressaoGeometrica(5, 1, 2)
