const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: ':::',
    preco: 1234
}

// Para resolver o problema de criar vários produtos eu posso criar uma factory

// Factory simples

function criarPessoa(){
    return{
        nome: 'Ana',
        Sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) // Sempre estará criando uma instância nova a ser trabalhada