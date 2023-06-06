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

let playerWin = 0;
let computerWin = 0;
let buttons = [
    document.querySelector('#rock'), 
    document.querySelector('#paper'),
    document.querySelector('#scissors')
];

for (btn of buttons) {
    btn.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        let result = playRound(btn.value, computerSelection);
        
        if (result.match(/win/i)) {
            playerWin++;
        } 
        else if (result.match(/lose/i)) {
            computerWin++;
        }

        document.querySelector('#results').innerHTML = result + `<br>Player Wins: ${playerWin} | Computer Wins: ${computerWin}`;
    });
}
