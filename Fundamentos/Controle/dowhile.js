function getInteiroAleatorioEntre(min, max){
    const valor = Math.random()*(max-min)+min;
    return Math.floor(valor)
}

let opcao = -1;

do{
    opcao = getInteiroAleatorioEntre(-1, 10); 
    console.log(opcao);
}while(opcao != -1)

