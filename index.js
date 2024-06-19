
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')
const resultDiv = document.querySelector('.result');

//disable buttons
function disableButtons() {
    setTimeout(() => {
        alert("Game restarted!"); // Example alert message
        humanScore = 0;
        computerScore = 0;
        result = ""
        result.innerHTML = ""
    }, 50);
}

//comp func
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//play Round
function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let result = ""

    if(playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        humanScore+=1
        result = `Yay! ${playerSelection} beats ${computerSelection}!<br>Player Score: ${humanScore}<br>Computer Score: ${computerScore}`;


        if (humanScore == 5) {
            result+= "<br> game Over! you won!"
        disableButtons()
        }

    } else if (playerSelection == computerSelection) {
        result = `It's a tie! Both chose ${playerSelection}.<br>Player Score: ${humanScore}<br>Computer Score: ${computerScore}`;
    } else {
        computerScore++;
        result = `Oops! ${computerSelection} beats ${playerSelection}.<br>Player Score: ${humanScore}<br>Computer Score: ${computerScore}`;

        if (computerScore === 5) {
            result += "<br>Game Over! Computer won!";
            disableButtons()
        }
    
    }
    //display result
    document.querySelector(".result").innerHTML = result

}

//get value of button on click
buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        playRound(button.value)
    })
});