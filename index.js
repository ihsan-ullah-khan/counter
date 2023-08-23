let countEl = document.getElementById("count-el")

let saveEl = document.getElementById(
    "save-el"
)

console.log(countEl)

console.log(saveEl)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save()
{
    let countStr = count + " - "

    saveEl.textContent += countStr

    count = 0

    countEl.textContent = count
 }

let username = "per"

username = 'per'

let message = 'You have three new notifications'

let messageToUser = message + ", " + username + "!"

console.log(messageToUser)
