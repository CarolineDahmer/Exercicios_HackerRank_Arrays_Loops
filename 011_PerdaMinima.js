const precos = [30,10,54,76,1,4,5];
let menor = precos[0]

for (let i = 0; i < precos.length; i++){
    for (let j = i + 1; j < precos.length; j++){
        const compra = precos[i]
        const venda = precos[j]
        const prejuizo = compra - venda

        if (prejuizo > 0){
            if (prejuizo < menor){
                menor = prejuizo
            }
        }
    }
}
console.log(menor)