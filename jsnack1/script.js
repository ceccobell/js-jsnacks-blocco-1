const array = ["francesco", "andrea", "filippo", "liam", "fabiola", "alice", "stefania"]

const search = document.getElementById("search")


search.addEventListener("click", function() {
    let name = document.getElementById("name").value
    let control = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] == name) {
            control = true
        }
    }

    if (control == true) {
        document.getElementById("message").innerText = name + " sei tra gli invitati"
    } else {
        document.getElementById("message").innerText = name + " non sei tra gli invitati"
    }
})