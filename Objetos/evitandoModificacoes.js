// Object.preventExtensions -> Não deixa adicionar mais atributos
// apenas deletar atributos já existentes

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal -> Não pode adicionar e nem excluir atributos, apenas modifica-los

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)

// Object.freeze = selado + valores constantes (Valores não podem ser modificados)