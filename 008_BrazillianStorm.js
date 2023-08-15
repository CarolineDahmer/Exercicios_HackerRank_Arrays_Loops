notas = [100,100,100,20,50,30,14,100,100,100]
menor = notas[0]
maior = notas[0]
soma = 0
i = 0
for (let cont of notas){
    i++
    soma = soma + cont
    if (cont < menor){
        menor = cont
    } 
    if (cont > maior){
        maior = cont
    }
}

console.log((soma-menor-maior)/(i-2))
