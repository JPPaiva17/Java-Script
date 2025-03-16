const contarCaracteres = (c, palavra) => palavra.split('').filter(e => e == c).length
console.log(contarCaracteres('c', 'CcCcC'))