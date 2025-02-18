/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capInicial, juros, tempo){
    console.log(`${(capInicial +( capInicial*juros*tempo)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
}

function jurosCompostos(capInicial, juros, tempo){
    console.log(`${(capInicial*((1+juros)**tempo)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
}

jurosSimples(10, 0.2, 12)
jurosCompostos(10, 0.2, 12)