 valores = [30,10,54,76,1,4,35]
 soma = 0
 menor = valores[0]
 i=1

 for (let valor of valores){
  soma = valor - valores[i]
  i++
  if (soma < menor){
    menor = soma
  }
 }
 console.log(menor)