let firstPasswordEl = document.getElementById("first-pass-el")
let secondPasswordEl = document.getElementById("second-pass-el")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

window.generatePassword = function generatePassword(length) {
    let randomPassword = ""
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        randomPassword += characters[randomIndex]
    }
    return randomPassword
}

window.startGeneration = function startGeneration() {
    let input = +document.getElementById("user-input").value
    if (!input || input < 8) {
        input = 15
    }
    let firstPassword = generatePassword(input)
    let secondPassword = generatePassword(input)
    firstPasswordEl.textContent = firstPassword
    secondPasswordEl.textContent = secondPassword
}
