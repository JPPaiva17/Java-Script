const receberSomenteOsParesDeIndicesPares2 = function (array){
    const lista = []
    for(let i = 0; i < array.length; i++ ){
        if(i%2 == 0 && array[i]%2 == 0){
            lista.push(array[i])
        }
    }

    return lista
} 

const receberSomenteOsParesDeIndicesPares = array => array.filter((valor, i) => i%2 == 0 && valor%2 == 0)

console.log(receberSomenteOsParesDeIndicesPares([1,2,3,4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
