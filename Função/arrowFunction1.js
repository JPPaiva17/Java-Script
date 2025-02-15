// Função Arrow tem 2 objetivos: Ser mais curta & Ter um this associado ao contexto da função

let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2*a
}

dobro = a => 2*a // Posso retirar os () se houver apenas 1 parametro e o retorno é implicito pois é só uma linha de código
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um parametro
console.log(ola())

