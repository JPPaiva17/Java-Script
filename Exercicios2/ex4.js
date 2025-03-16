function recebeNumeroConverteMes(num) {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    return meses[num - 1] || "Mês inválido"; 
}

console.log(recebeNumeroConverteMes(10))

console.log(recebeNumeroConverteMes(27))