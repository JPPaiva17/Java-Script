const inverso = (valor) => 
    typeof valor === "boolean" ? !valor : 
    typeof valor === "number" ? -valor : 
    `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`;

console.log(inverso(true));    // false
console.log(inverso(10));      // -10
console.log(inverso(-10));     // 10
console.log(inverso([10]));    // "Booleano ou número esperados, mas o parâmetro é do tipo object"
console.log(inverso("10"));    // "Booleano ou número esperados, mas o parâmetro é do tipo string"
console.log(inverso(null));    // "Booleano ou número esperados, mas o parâmetro é do tipo object"
