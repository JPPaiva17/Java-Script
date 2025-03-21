let p = new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Lana'])
})

p   
    .then(valor => valor[0])            // Pegou Ana da lista
    .then(valor => valor[0])            // Pegou A de Ana
    .then(valor => console.log(valor.toLowerCase()))
