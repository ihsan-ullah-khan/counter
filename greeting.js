
let name = " Ihsan Ullah Khan"

let greeting = "Good afternoon"

let myGreeting = greeting + ' ' + name

console.log(myGreeting)

// Strings vs integers

console.log(4 + 5)
console.log("2" + "4")
console.log(2 + "4")
console.log("100" + 100)

let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerText = myGreeting

welcomeEl.innerText += " 👋"