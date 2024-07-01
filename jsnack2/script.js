const array = []

for (i = 0; i < 6; i++) {
    let num = prompt("inserisci un numero")
    if (num % 2 != 0) {
        array.push(num)
    }
    console.log(num)
}

console.log(array)