/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
 */

function estatisticasJogos(lista) {
    let pontuacoes = lista.map(Number);
    let contadorRecorde = 0;
    let piorJogo = pontuacoes[0];
    let melhorDesempenho = pontuacoes[0];
    let indicePiorJogo = 0; 

    for (let i = 1; i < pontuacoes.length; i++) {
        let pontuacao = pontuacoes[i];

        if (pontuacao > melhorDesempenho) {
            contadorRecorde++;
            melhorDesempenho = pontuacao;
        } 
        
        if (pontuacao < piorJogo) {
            piorJogo = pontuacao;
            indicePiorJogo = i; 
        }
    }

    return [contadorRecorde, indicePiorJogo + 1];
}


console.log(estatisticasJogos(["1","34","56","32","3","45","90","87","42","100"]))