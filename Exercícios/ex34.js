/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function contemTodosCaracteres(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    for (let char of str1) {
        if (!str2.includes(char)) {
            return false;
        }
    }

    for (let char of str2) {
        if (!str1.includes(char)) {
            return false;
        }
    }

    return true;
}

// Testes
console.log(contemTodosCaracteres("abc", "CBA")); // true
console.log(contemTodosCaracteres("teste", "etset")); // true
console.log(contemTodosCaracteres("javascript", "Java")); // false
console.log(contemTodosCaracteres("hello", "world")); // false
