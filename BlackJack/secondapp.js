let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let aoc = [firstCard,secondCard]
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips
let player = {
     Name: "Per", 
     Chips: 145
}
function getRandomCard(){
    let value = Math.floor(Math.random()*13)+1 
    if (value === 1){
        return 11
    } 
    else if(value>11 && value<13){
        return 10
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard+ secondCard]
    let sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for(let  i=0; i<aoc.length; i++){
    cardEl.textContent+= aoc[i] + " "
    }
    sumEl.textContent = "Sum:" + sum 
    if(sum<=20){
        message = "Do you want to draw a card?"
    }
    else if(sum === 21){
        message = "You got BlackJack!"
        hasBlackJack === true
    }
    else{
        message = "You're out of the game :("
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let newC = getRandomCard()
    sum+=newC
    aoc.push(newC)
    renderGame()
    }
}
