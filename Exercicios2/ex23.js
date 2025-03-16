const buscasPalavrasSemelhantes = (busca, array) => array.filter(v => v.includes(busca))

console.log(buscasPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))