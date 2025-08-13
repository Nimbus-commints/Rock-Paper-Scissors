console.log("Hello World!");

// const playerInput = document.getElementById("input");
const playerChoice = prompt("Enter your choice (rock, paper, scissors):");

const choices = ["rock", "paper", "scissors"];

// console.log("Choices:", choices);

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
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

console.log("Computer choice:", computerPlay());
console.log("Player choice:", playerChoice);
console.log("Round result:", playRound(playerChoice, computerPlay()));
// console.log("Round result:", playRound(playerChoice, computerPlay()));
// console.log("Round result:", playRound(playerChoice, computerPlay()));
// console.log("Round result:", playRound(playerChoice, computerPlay()));
// console.log("Round result:", playRound(playerChoice, computerPlay()));
