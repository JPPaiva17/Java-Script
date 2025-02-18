/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

function formulaBhaskara(ax2, bx, c) {
    let delta = (bx ** 2) - (4 * ax2 * c);

    if (delta < 0) {
        return "Delta é negativo";
    }

    let raizDelta = Math.sqrt(delta); // Usando Math.sqrt() para maior clareza

    let x1 = (-bx + raizDelta) / (2 * ax2);
    let x2 = (-bx - raizDelta) / (2 * ax2);

    return [x1, x2];
}

// Testes
console.log(formulaBhaskara(1, -5, 6)); // [3, 2]
console.log(formulaBhaskara(1, 1, 10)); // "Delta é negativo"
console.log(formulaBhaskara(1, -2, 1)); // [1, 1] (raízes iguais)
