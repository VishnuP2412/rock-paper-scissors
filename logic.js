let playerScore = 0
let computerScore = 0


function reset() {
    playerScore = 0
    computerScore = 0
    let result = document.getElementById("result")
    result.textContent = "Play Game"
    let score = document.getElementById("scoreCard")
    score.textContent = ""
}

function check() {
    let score = document.getElementById("scoreCard")
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`
}

function computerChoice(playerChoice) {

    let choiceButton = document.getElementsByClassName("choice")
    let computerChoice = Math.floor(Math.random() * 3)
    let result = document.getElementById("result")
    const choices = {0: "rock", 1: "paper", 2: "scissors"}
    if (playerChoice === choices[computerChoice]) {
        result.textContent = "It's a tie!"
        console.log("It's a tie!")
    }

    else if (playerChoice === "rock") {
        if (choices[computerChoice] === "scissors") {
            result.textContent = "You win!"
            playerScore++
            console.log("You win!")
        } else {
            result.textContent = "Computer wins!"
            computerScore++
            console.log("Computer wins!")
        }
    }

    else if (playerChoice === "paper") {
        if (choices[computerChoice] === "rock") {
            result.textContent = "You win!"
            playerScore++
            console.log("You win!")
        } else {
            result.textContent = "Computer wins!"
            computerScore++
            console.log("Computer wins!")
        }
    }

    else if (playerChoice === "scissors") {
        if (choices[computerChoice] === "paper") {
            result.textContent = "You win!"
            playerScore++
            console.log("You win!")
        } else {
            result.textContent = "Computer wins!"
            computerScore++
            console.log("Computer wins!")
        }
    }
}
