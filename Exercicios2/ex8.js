const multiplicaSemUsarMultiplicador = function(num1, num2){
    let result = num1;
    for(let i = 1; i < num2; i++){
        result+=num1
    }
    
    return result
}

console.log(multiplicaSemUsarMultiplicador(10,4))