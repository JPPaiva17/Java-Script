const estaEntre = function (numero, min, max, inclusivo) {
    if(numero> min && numero < max){
        return true
    }else if(numero>= min && numero <= max && inclusivo == true){
        return true
    }
    else{
        return false
    }
}

const estaEntre2 = (numero, min, max, inclusivo) => (numero> min && numero < max) ? true : 
    numero>= min && numero <= max && inclusivo == true ? true : false

const estaEntre3 = (numero, min, max, inclusivo = false) =>
    inclusivo ? numero>= min && numero<= max : numero > min && numero < max

console.log(estaEntre2(60, 50, 100))
console.log(estaEntre2(10, 50, 100))
console.log(estaEntre2(60, 60, 100))
console.log(estaEntre2(60, 60, 100, true))
