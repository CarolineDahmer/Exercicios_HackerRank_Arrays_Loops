
function solucao(stringCorrompida) {
    let dadoPurificado = ''
    for (let caracteres of stringCorrompida){
        if (caracteres === '!' || caracteres === '@' || caracteres === '#' || caracteres === '$' || caracteres === '%' || caracteres === '&' || caracteres === '*' || caracteres === '()' || caracteres == ')' ||caracteres == '(' ){
            //ignorar
        } else {
            dadoPurificado = dadoPurificado + caracteres
        }
    
    }
    console.log(dadoPurificado)
}

function processData(input) {
    solucao(input);
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