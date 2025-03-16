const despesasTotais = array => array.map(item => item.preco).reduce((acumulado, preco)=>acumulado+preco, 0)

console.log(despesasTotais([{
    nome: "Jornal Online",
    categoria: "Informação",
    preco: 89.99
},{
    nome: "Cinema",
    categoria: "Entretenimento",
    preco: 150
}]))


console.log(despesasTotais([{
    nome: "Galaxy S20",
    categoria: "Eletrônicos",
    preco: 5999.99
},{
    nome: "Nintendo Switch",
    categoria: "Eletronicos",
    preco: 2599.99
}]))