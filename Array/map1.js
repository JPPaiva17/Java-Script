// Map é uma transformação de um array (Transformação de dados)
// Os arrays sempre terão os mesmos tamanhos

const nums = [1, 2, 3, 4, 5]

// For com um propósito

let resultado = nums.map(function(e){
    return 2*e
})

console.log (resultado, nums)


const soma10 = e => e+10
const triplo = e => e*3
const paraDinheiro = e =>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log (resultado)

