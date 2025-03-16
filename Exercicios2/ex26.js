const filtrarPorQuantidadeDeDigitos = (array, dig) => array.filter(e => e.toString().length === dig)

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))