// ... -> espalhar Spread -> juntar Rest

// Usar rest como parâmetro de função

// Spread com Objeto, espalhando os atributos de funcionario em clone

const funcionario = {nome: 'maria', salario: 123.45}
const clone = {ativo: true, ...funcionario}

console.log(clone)

// Spread com Array

const grupoA = ['João', 'Pedro', 'Paiva']
const grupoFinal =  ['Laura', 'Simone', 'Victoria', ...grupoA, 'Celestino']

console.log(grupoFinal)

