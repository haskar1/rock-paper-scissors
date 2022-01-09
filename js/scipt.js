const selectionList = ["rock", "paper", "scissors"];
const playerSelection = "rock";
const valueOfPlayerSelection = selectionList.find(element => {
    return element.toLowerCase() === playerSelection.toLowerCase();
});

let playerScore = 0;
let computerScore = 0;

function playRound() {
    const computerSelection = selectionList[Math.floor(Math.random() * selectionList.length)];
    if (valueOfPlayerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return `Computer chose ${computerSelection}, you lose! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        } else if (computerSelection === "scissors") {
            playerScore++;
            return `Computer chose ${computerSelection}, you win! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        } else {
            return `Computer chose ${computerSelection}, it's a tie! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        }
    } else if (valueOfPlayerSelection === "paper") {
        if (computerSelection === "scissors") {
            score = 0;
            return `Computer chose ${computerSelection}, you lose! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        } else if (computerSelection === "rock") {
            score = 1;
            return `Computer chose ${computerSelection}, you win! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        } else {
            score = 0;
            return `Computer chose ${computerSelection}, it's a tie! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        }
    } else if (valueOfPlayerSelection === "scissors") {
        if (computerSelection === "rock") {
            score = 0;
            return `Computer chose ${computerSelection}, you lose! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        } else if (computerSelection === "paper") {
            score = 1;
            return `Computer chose ${computerSelection}, you win! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        } else {
            score = 0;
            return `Computer chose ${computerSelection}, it's a tie! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
        }
    } else {
        return 'Type "rock", "paper", or "scissors"';
    }
}

function game() {
    return playRound();
}

for (let i=0; i<5; i++) {
    console.log(game());
}

if (playerScore > computerScore) {
    console.log("You won!");
} else if (computerScore > playerScore) {
    console.log("You lost");
} else {
    console.log("It's a tie");
}