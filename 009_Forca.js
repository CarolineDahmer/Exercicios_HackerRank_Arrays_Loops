palpite = 'a'
palavra = 'amanda'
soma = 0

for (let cont of palavra){
    if (cont === palpite){
        soma = soma + 1
    }
}

console.log(soma)