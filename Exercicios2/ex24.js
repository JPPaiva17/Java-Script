const removerVogais = palavra => palavra.split('').filter(e => !'aeiouAEIOU'.includes(e)).reduce((pFinal, e) => pFinal + e, '')

const removerVogais2 = palavra => palavra.replace(/[aeiouAEIOU]/g, '')

console.log(removerVogais2('JoaoPedro'))