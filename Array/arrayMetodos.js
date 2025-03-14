const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // Exclui o ultimo elemento ou do indice
pilotos.push('Verstappen') // Adiciona Elemento na ultima posição
pilotos.shift() // Remove o primeiro elemento
pilotos.unshift('Hamilton') //Adiciona no primeiro elemento
console.log(pilotos)

// Splice pode adicionar e remover elementos de um array

// Adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Remove a partir do indice 3, 1 elemento  
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Novo Array a partir do indice 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4) // Novo arrary a partir do indice 2 e excluindo o 4
console.log(algunsPilotos2)