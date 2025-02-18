/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function algoritmoAluno(codigo, nota1, nota2, nota3){
    let notas = [nota1, nota2, nota3];
    notas.sort((a, b) => b-a);

    let mediaPonderada = ((notas[0]*4)+ 3*(notas[1]+notas[2]))/ 10;
    
    console.log(`Código do Aluno: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaPonderada < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

algoritmoAluno(123, 2.8, 6, 3.5)