// Função em JS é First-Class Object(Citizen)
// Higher-order Function

// Criar de Forma literal
function func1(){ }

// Armazenar em uma variável
const func2 = function () { }

// Armazenar em um array
const array = [function(a,b){return a+b}, func1, func2];
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function(){return 'Opa'}
console.log(obj.falar());

// Passar função como parâmetro

function run(fun){
    fun()
}

run(function(){console.log("Executando...")})

// Função que pode retornar outra função

function soma(a,b){
    return function(c){
        console.log(a+b+c);
    }
}

soma(2,3)(5)
const cincoMais = soma(2,3)
cincoMais(5)
