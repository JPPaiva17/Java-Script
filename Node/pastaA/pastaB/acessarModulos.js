const moduloA = require('../../moduloA')
console.log(moduloA.ola)


// Não utilizar caminho absoluto pois ao realizar deploy, esse não será o caminho do servidor

const moduloB = require('/Users/jppai/OneDrive/Documentos/Java-Script/Node/moduloB.js')

console.log(moduloB.bomDia)