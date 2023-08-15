disparos = [0,90,50,100,80,80,40]
i = 0
for (let cont of disparos){
    if (cont > 70){
        i++
    }
}
if (i >= 3) {
    console.log(i)
} else {
    console.log("ELIMINADO")
}