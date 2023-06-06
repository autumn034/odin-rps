function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "Tie!"
    } 
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } 
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

}

function game() {
    let playerWin = 0;
    let computerWin = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("rock/paper/scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        alert(result);

        if (result.match(/win/i)) {
            playerWin++;
        } 
        else if (result.match(/lose/i)) {
            computerWin++;
        }
    }

    alert(`Player Wins: ${playerWin} | Computer Wins: ${computerWin}`)
}

game();

