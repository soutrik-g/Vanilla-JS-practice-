let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){
    count += 1
    countEl.innerText = count
}
function save(){
    let track = count + " - "
    saveEl.textContent += track
    count = 0
    countEl.innerText = 0
}