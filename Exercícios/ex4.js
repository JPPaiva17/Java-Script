// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function divisao(dividendo, divisor){

    if (divisor === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
        return;
    }

    console.log(`Resultado: ${dividendo/divisor}, Resto: ${dividendo%divisor}`)
}

divisao(9, 8)