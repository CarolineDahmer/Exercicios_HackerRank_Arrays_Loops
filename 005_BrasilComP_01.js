primeiraLetra = 'c'
segundaLetra = 'v'
const palavras = [
    "aveia",
    "manha",
    "ave"
]
resultadoPrimeiraLetra = [];
resultadoFinal = [];
for (let termo of palavras){    
    for(let letras of termo){
        if (letras === primeiraLetra){
            resultadoPrimeiraLetra.push(termo)
        }
    break
    }
}
i = 0
for (let termo of resultadoPrimeiraLetra){
    i=0
    for (letras of termo){
        i++
        if (i == 2 && letras === segundaLetra){
            resultadoFinal.push(termo)
        }
    }
}

if (Object.keys(resultadoFinal).length === 0) {
    console.log("NENHUMA")
} else {
    for (let termo of resultadoFinal){
        console.log(termo)
}
}

