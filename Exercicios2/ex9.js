const repetir = function(param1, vezes){ 
    for(let i = 0; i < vezes; i++){
        console.log(param1)
    }
}

const repetir2 = (param1, vezes) => { 
    for (let i = 0; i < vezes; i++) console.log(param1);
}

const repetir3 = (param1, vezes) => Array(vezes).fill(param1).forEach(console.log);

