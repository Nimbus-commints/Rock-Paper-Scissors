// const playerChoice = prompt("Enter your choice (rock, paper, scissors):");

// Choices for the game and the computer's selection
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
  if (playerScore >= 5) {
    document.querySelector("#result-text").textContent =
      "PLAYER WON! GAME OVER!";
    console.log("PLAYER WON Game over!");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore >= 5) {
    document.querySelector("#result-text").textContent =
      "COMPUTER WON! GAME OVER!";
    console.log("COMPUTER WON Game over!");
    playerScore = 0;
    computerScore = 0;
  }
  // for (let i = 0; i < 5; i++) {
  //   const playerSelection = prompt(
  //     "Enter your choice (rock, paper, scissors):"
  //   );
  //   const computerSelection = computerPlay();
  //   console.log(`Round ${i + 1}:`);
  //   console.log(
  //     `Player choice: ${playerSelection} , Computer choice: ${computerSelection}`
  //   );
  //   console.log(playRound(playerSelection, computerSelection));
  // }
  // console.log("Final Scores:");
  // console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
  // if (playerScore > computerScore) {
  //   console.log("You win the game!");
  // } else if (computerScore > playerScore) {
  //   console.log("You lose the game!");
  // } else {
  //   console.log("The game is a tie!");
  // }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");
// const resultText = document.querySelector("#result-text");

rockButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "rock";
  const result = playRound(playerSelection, computerSelection);
  document.querySelector("#result-text").textContent = result;
  document.querySelector("#computer-choice").textContent = computerSelection;
  document.querySelector("#player-choice").textContent = playerSelection;
  document.querySelector(
    ".player .score"
  ).textContent = `Score: ${playerScore}`;
  document.querySelector(
    ".computer .score"
  ).textContent = `Score: ${computerScore}`;
  game();
});

paperButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "paper";
  const result = playRound(playerSelection, computerSelection);
  document.querySelector("#result-text").textContent = result;
  document.querySelector("#computer-choice").textContent = computerSelection;
  document.querySelector("#player-choice").textContent = playerSelection;
  document.querySelector(
    ".player .score"
  ).textContent = `Score: ${playerScore}`;
  document.querySelector(
    ".computer .score"
  ).textContent = `Score: ${computerScore}`;
  game();
});

scissorButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "scissors";
  const result = playRound(playerSelection, computerSelection);
  document.querySelector("#result-text").textContent = result;
  document.querySelector("#computer-choice").textContent = computerSelection;
  document.querySelector("#player-choice").textContent = playerSelection;
  document.querySelector(
    ".player .score"
  ).textContent = `Score: ${playerScore}`;
  document.querySelector(
    ".computer .score"
  ).textContent = `Score: ${computerScore}`;
  game();
});

// if (playerScore === 5) {
//   console.log("You win the game!");
// }
// if (computerScore === 5) {
//   console.log("You lose the game!");
// }

// console.log("Computer choice:", computerPlay());
// console.log("Player choice:", playerChoice);
// game();
// console.log("Round result:", playRound(playerChoice, computerPlay()));
// console.log("Round result:", playRound(playerChoice, computerPlay()));
// console.log("Round result:", playRound(playerChoice, computerPlay()));
// console.log("Round result:", playRound(playerChoice, computerPlay()));
