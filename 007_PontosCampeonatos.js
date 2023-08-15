resultados = ['V','E','V','E']
soma = 0

for (let cont of resultados){
    if (cont === 'V'){
        soma = soma + 3
    } else if (cont === 'E'){
        soma = soma + 1
    }
}

console.log(soma)