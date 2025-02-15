const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar // Estamos armazenando apenas a função falar nessa constante, tirando-a de contexto
falar() // Conflito entre paradigmas: funcional e Orientado a Objetos

const falarDePessoa = pessoa.falar.bind(pessoa) // Bind ele irá amarrar a função a determinado objeto 
falarDePessoa()