console.log("Hello World!");

// const playerChoice = prompt("Enter your choice (rock, paper, scissors):");

const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (!choices.includes(playerSelection.toLowerCase())) {
    return alert("Invalid choice! Please choose rock, paper, or scissors.");
  }
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your choice (rock, paper, scissors):"
    );
    const computerSelection = computerPlay();
    console.log(`Round ${i + 1}:`);
    console.log(
      `Player choice: ${playerSelection} , Computer choice: ${computerSelection}`
    );
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log("Final Scores:");
  console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > playerScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is a tie!");
  }
}

// console.log("Computer choice:", computerPlay());
// console.log("Player choice:", playerChoice);
game();
// console.log("Round result:", playRound(playerChoice, computerPlay()));
// console.log("Round result:", playRound(playerChoice, computerPlay()));
// console.log("Round result:", playRound(playerChoice, computerPlay()));
// console.log("Round result:", playRound(playerChoice, computerPlay()));
