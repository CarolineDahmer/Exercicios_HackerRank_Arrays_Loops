

function solucao(sequencia) {
    i=0
    for(let cont of sequencia){
        if (cont === '>'){
            i++
        } else {
            i--
        }
        if (i < 0){
            i = 6
        } else if (i > 6){
            i=0
        }
    }
    console.log(i)
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
