
function solucao(precos) {
    let menor = precos[0]
    let totalPagar = 0
    let totalPagarDesconto = 0

    for (let valores of precos){
        if (valores < menor){
            menor = valores
        }
    }
    for (let valores of precos){
        totalPagar = totalPagar + valores
    }
    if (precos.length < 5){
        console.log(totalPagar)
    }else {
    console.log(totalPagar-menor)
    }
}


function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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