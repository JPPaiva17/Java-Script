/*
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function minimoCedulas(valor){

    const cedulas = [100, 50, 20, 10, 5, 1];
    let resultado = []

    for (let cedula of cedulas) {
        let qtd = Math.floor(valor / cedula);
        if (qtd > 0) {
            resultado.push(`${qtd} nota(s) de R$ ${cedula}`);
            valor %= cedula; 
        }
    }

    return resultado.join(". ");
}


// Testes

console.log(minimoCedulas(18));
console.log(minimoCedulas(576));
console.log(minimoCedulas(91));
console.log(minimoCedulas(3));