const GAME_CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function computerPlay() {
  return GAME_CHOICES[Math.floor(Math.random() * 3)];
}

function playerWin(param1, param2) {
  let caseOne = param1 === "rock" && param2 === "scissors";
  let caseTwo = param1 === "paper" && param2 === "rock";
  let caseThree = param1 === "scissors" && param2 === "paper";
  return caseOne || caseTwo || caseThree ? true : false;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Equality!";
  } else if (playerWin(playerSelection, computerSelection)) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function game(playerSelection) {
  let computerSelection = computerPlay();
  let currentRound = playRound(playerSelection, computerSelection);

  if (currentRound === "You win!") {
    playerScore++;
  } else if (currentRound === "You lose!") {
    computerScore++;
  }

  rounds++;
  const logs = document.createElement("li");
  const list = document.getElementById("list");
  logs.innerHTML = `${rounds}. Computer chooses ${computerSelection}`;
  list.appendChild(logs);
}

const buttons = Array.from(document.querySelectorAll("button"));
const round = document.getElementById("rounds");
const heroText = document.getElementById("hero_text");
const middle = document.getElementById("middle");
const cpterScore = document.createElement("h3");
const plyerScore = document.createElement("h3");
document.getElementById("top").appendChild(cpterScore);
document.getElementById("top").appendChild(plyerScore);

buttons.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index].addEventListener("click", function (e) {
    if (playerScore === 5 || computerScore === 5) {
      heroText.innerText = "To play another game reload the page!";
    }
    if (playerScore === 5) {
      middle.innerText = `You win this game (${playerScore} to ${computerScore}) ! Congrats!!!!`;
    } else if (computerScore === 5) {
      middle.innerText = `You lose this game (${computerScore} to ${playerScore}) . Try again!!!`;
    } else {
      game(arr[index].id);
      cpterScore.innerText = `Computer score : ${computerScore}`;
      plyerScore.innerText = `Your score : ${playerScore}`;
      round.innerText = `Rounds : ${rounds}`;
    }
  });
}
