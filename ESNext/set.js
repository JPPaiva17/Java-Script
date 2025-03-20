// Estrutura não indexada e não aceita repetição

const times = new Set()
times.add('Flamengo')
times.add('Botafogo').add('Real Madrid').add('Chicago White Sox')
times.add('Raiders')
times.add('Flamengo') // Não entrou novamente pois não aceita repetições


console.log(times)
console.log(times.size)
console.log(times.has('Raiders'))

console.log(times.delete('Real Madrid'))

const nomes = ['Raquel', 'Miguel', 'Lucas', 'Raquel']

const nomesSet = new Set(nomes)
console.log(nomesSet)