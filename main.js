let saveEl = document.getElementById("saved-el")
let outputEl = document.getElementById("output")
let output = 0

function increment() {
    output += 1
    outputEl.textContent = output
}


function save() {
    savedCount = output + " - "
    saveEl.textContent += savedCount
    outputEl.textContent = 0
    output = 0
}

function reset() {
    outputEl.textContent = 0
    output = 0
}