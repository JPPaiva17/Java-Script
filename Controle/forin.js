const notas = [1.2, 5.4, 7.7, 10, 1, 4.9]

for(let i in notas){
    console.log(`Notas = ${notas[i]}`)
}

console.log()

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}