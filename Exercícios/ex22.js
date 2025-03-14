/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function valorAnuidade(mesPago, valor){
    return jurosCompostos(valor, 0.05, mesPago-1)
}

function jurosCompostos(capInicial, juros, tempo){
    console.log(`${(capInicial*((1+juros)**tempo)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
}

valorAnuidade(4,100)