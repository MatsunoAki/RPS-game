
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');

let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')
const resultDiv = document.querySelector('.result');


//Game Reset
function gameReset() {
    setTimeout(() => {

        
        playerDisplay.textContent = `Player Choice: `;
        computerDisplay.textContent = `Computer Choice: `;
        resultDisplay.textContent = "";
        playerScoreDisplay.textContent = `0`;
        computerScoreDisplay.textContent = `0`;

    }, 50);
}

//comp func
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

//play Round
function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let result = ""

    if(playerSelection === computerSelection) {
        result = "BEEP! IT'S A TIE"
    } else {
        switch(playerSelection){
            case "Rock": {
                result = (computerSelection === "Scissors") ? "YOU WIN!":"YOU LOSE!"
                break;
            }
            case "Paper": {
                result =(computerSelection === "Rock") ? "YOU WIN!":"YOU LOSE!"
                break;
            }
            case "Scissors": {
                result =(computerSelection === "Paper") ? "YOU WIN!":"YOU LOSE!"
                break;
            }
        }
    }
    playerDisplay.textContent = `Player Choice: ${playerSelection}`;
    computerDisplay.textContent = `Computer Choice: ${computerSelection}`;
    resultDisplay.textContent = result;


    resultDisplay.classList.remove("greenText", "redText");

    switch(result) {
        case "YOU WIN!": 
            resultDisplay.classList.add("greenText");
            humanScore++;
            playerScoreDisplay.textContent = humanScore;
            break;
        
        case "YOU LOSE!": 
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    if(humanScore === 5) {
        alert("Game Over! YOU WON!!!");
        humanScore = 0;
        gameReset();
    }else if(computerScore ===5){
        alert("Game Over! COMPUTER WON..");
        computerScore = 0;
        gameReset();
    }
}