function removerPropriedade (objeto, nomeDapropriedade){
    const copia = Object.assign({}, objeto)
    delete copia[nomeDapropriedade]

    return copia
}