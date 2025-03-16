const inverter = function(objeto){
    const objetoRetorno = new Object

    for(chave in objeto){
        objetoRetorno[objeto[chave]] = chave
    }

    return objetoRetorno
}

const inverter2 = objeto => Object.entries(objeto).reduce((acc, [chave, valor]) => {acc[valor] = chave; return acc}, {})

console.log(inverter2({a: 1, b: 2, c: 3}));