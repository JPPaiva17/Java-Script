const objetoParaArray = (objeto) => Object.entries(objeto)

const pessoa = { nome: "João", idade: 25, cidade: "São Paulo" };

console.log(objetoParaArray(pessoa))