const receberMelhorEstudante = objeto =>
     objeto.map(e => ({nome:e.key, media:(e.value).reduce((somador, notas) => somador + notas, 0)/e.value.length }))
    .reduce((melhor, estudante) => estudante.media > melhor.media ? estudante : melhor)

const receberMelhorEstudante2 = objeto => 
    objeto
      .map(e => ({
        nome: e.key,
        media: e.value.reduce((somador, notas) => somador + notas, 0) / e.value.length
      }))
      .reduce((melhor, estudante) => estudante.media > melhor.media ? estudante : melhor);

console.log(receberMelhorEstudante([
{ key: 'João', value: [7, 8, 9] },
{ key: 'Maria', value: [10, 9, 8] }
]));
  