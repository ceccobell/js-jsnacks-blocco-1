let somma = 0

for (i = 1; i <= 10; i++) {
    let num = prompt("inserisci un numero")
    console.log(i, " numero inserito", num)

    somma += parseInt(num)
}

console.log("La somma è ", somma)