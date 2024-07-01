let num = prompt("inserisci un numero di 4 cifre")
console.log(num)

let somma = 0

for (i = 0; i < num.length; i++) {
    somma += parseInt(num[i])
}

console.log(somma)