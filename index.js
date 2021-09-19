let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let sumEL = document.querySelector("#sum-el")
let cardsEL = document.querySelector("#cards-el")

let player = {
    name: "Tushar",
    chips: 150
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {

    let randomNum = Math.floor( Math.random()*13 ) + 1

    if(randomNum === 1) {
        return 11
    }
    else if(randomNum > 10) {
        return 10
    }
    else {
        return randomNum
    }
    
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    cardsEL.textContent = "CARDS: "

    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }
    
    sumEL.textContent = "SUM: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } 
    else if(sum === 21) {
        message = "Wohoo! You've got a Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {

        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        
    }
    
}
