const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    
    // Desafio Mulher chinesa com o menor salário
    const menorSalarioMulherChinesa = funcionarios.filter(e => e.pais === 'China' && e.genero === 'F')
    .reduce((menor, atual) => (atual.salario < menor.salario ? atual : menor))


    console.log(menorSalarioMulherChinesa.nome)
})


