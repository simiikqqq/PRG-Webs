const choices = ["kámen", "papír", "nůžky"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "Je to remíza!";
    }
    else{
        switch(playerChoice){
            case "kámen":
                result = (computerChoice === "nůžky") ? "Vyhráli jste!" : "Prohráli jste!";
                break;
            case "papír":
                result = (computerChoice === "kámen") ? "Vyhráli jste!" : "Prohráli jste!";
                break;
            case "nůžky":
                result = (computerChoice === "papír") ? "Vyhráli jste!" : "Prohráli jste!";
                break;
        }
    }

    playerDisplay.textContent = `Hráč: ${playerChoice}`;
    computerDisplay.textContent = `Počítač: ${computerChoice}`; 
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "Vyhráli jste!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Prohráli jste!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}