
function solucao(primeiraLetra, segundaLetra, palavras) {
    resultadoPrimeiraLetra = []
    resultadoFinal = []
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
    
    if (resultadoFinal.lenght === 0){
        console.log("NENHUMA")
    } else {
        console.log(resultadoFinal)
    }
    
}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});