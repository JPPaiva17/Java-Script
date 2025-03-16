const calcularSalario = (horasTrabalhadas, precoHora) => "Salário igual a R$ " + (horasTrabalhadas * precoHora).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(calcularSalario(150, 40.5))
