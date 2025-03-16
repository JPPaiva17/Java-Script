const somaArray = array => array.reduce((acumulado, atual) => acumulado + atual, 0)

console.log(somaArray([1,2,3,4,5]))
