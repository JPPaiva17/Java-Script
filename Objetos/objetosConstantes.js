// Pessoa -> 123 -> {...}

const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'

console.log(pessoa)


// Pessoa <- 456 -> {...}
// pessoa = {nome: 'Ana'}


Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua abc'

console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({nome: 'Maria'})
pessoaConstante.nome = 'Ana'
console.log(pessoaConstante)