const GAME_CHOICES = ["rock", "paper", "scissors"];

function computerPlay() {
  return GAME_CHOICES[Math.floor(Math.random() * 3)];
}

function playerWin(param1, param2) {
  var caseOne = param1 === "rock" && param2 === "scissors";
  var caseTwo = param1 === "paper" && param2 === "rock";
  var caseThree = param1 === "scissors" && param2 === "paper";
  return caseOne || caseTwo || caseThree ? true : false;
}

function playRound(playerSelection, computerSelection) {
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    console.log(`Both ${playerSelection}!!!`);
    return "Equality!";
  } else if (playerWin(playerSelection, computerSelection)) {
    console.log(`${playerSelection} beats ${computerSelection}!!!`);
    return "You win!";
  } else {
    console.log(`${computerSelection} beats ${playerSelection}!!!`);
    return "You lose!";
  }
}

function game(round) {
  var playerScore = 0;
  var computerScore = 0;
  while (round > 0) {
    playerSelection = prompt().toLowerCase();
    computerSelection = computerPlay();
    var currentRound = playRound(playerSelection, computerSelection);
    if (currentRound === "You win!") {
      playerScore++;
    } else if (currentRound === "You lose!") {
      computerScore++;
    }
    round--;
  }
  if (playerScore > computerScore) {
    return `You win this game (${playerScore} to ${computerScore}) ! Congrats!!!!`;
  } else if (playerScore === computerScore) {
    return "Same score.Woo!!!!";
  } else {
    return `You lose this game (${computerScore} to ${playerScore}) . Try again!!!`;
  }
}

console.log(game(5));
