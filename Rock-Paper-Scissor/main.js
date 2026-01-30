// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

// const choices = ["rock", "paper", "scissors"];

// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// let playerScore = 0;
// let computerScore = 0;

// function playGame(playerChoice) {
//   const computerChoice = choices[Math.floor(Math.random() * choices.length)];

//   let outcome = ""; // "win" | "lose" | "tie"

//   // 1️⃣ Decide outcome (LOGIC ONLY)
//   if (playerChoice === computerChoice) {
//     outcome = "tie";
//   } else if (
//     (playerChoice === "rock" && computerChoice === "scissors") ||
//     (playerChoice === "paper" && computerChoice === "rock") ||
//     (playerChoice === "scissors" && computerChoice === "paper")
//   ) {
//     outcome = "win";
//   } else {
//     outcome = "lose";
//   }

//   // 2️⃣ Update displays
//   playerDisplay.textContent = `PLAYER: ${playerChoice}`;
//   computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

//   // 3️⃣ Reset styles
//   resultDisplay.classList.remove("greenText", "redText");

//   // 4️⃣ Apply outcome (STYLE + SCORE)
//   if (outcome === "win") {
//     resultDisplay.textContent = "YOU WIN!";
//     resultDisplay.classList.add("greenText");
//     playerScore++;
//     playerScoreDisplay.textContent = playerScore;
//   }
//   else if (outcome === "lose") {
//     resultDisplay.textContent = "YOU LOSE!";
//     resultDisplay.classList.add("redText");
//     computerScore++;
//     computerScoreDisplay.textContent = computerScore;
//   }
//   else {
//     resultDisplay.textContent = "IT'S A TIE!";
//   }
// }

