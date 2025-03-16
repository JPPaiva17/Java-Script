const menorNumero = array => (array.sort((a, b) => a - b))[0]

console.log(menorNumero([1, 2, 3, 0, -1234235, -5 , 10, 102314]))