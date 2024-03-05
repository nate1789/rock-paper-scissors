// Random Computer Selection
function getComputerChoice() {
    let randomWordArray = ["Rock", "Paper", "Scissors"];
    return randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
}

// Choose Rock, Paper, or Scissors
function playRound(playerSelection, computerSelection) {
    // Change to titlecase
    let randomComputer = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    let randomPlayer = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    // Game Rules
    if (randomPlayer == randomComputer) {console.log(`It's a tie`); return 'tie';}
    else if ((randomPlayer == "Rock" && randomComputer == "Paper") || (randomPlayer == "Paper" && randomComputer == "Scissors") || (randomPlayer == "Scissors" && randomComputer == "Rock")) {console.log(`You lose! ${randomComputer} beats ${randomPlayer}`); return 'lose';}
    else {console.log(`You win! ${randomPlayer} beats ${randomComputer}`); return 'win';}
  }

// Play game until a winner
function playGame() {
    let iPlayer = 0;
    let iComputer = 0;
    let index = 0;

    // amount of times gam is played
    while (index < 5) {
        let userInput = prompt("Rock, Paper, or Scissors?");
        let answer = playRound(userInput, getComputerChoice());
        if (answer == "tie") {index += 0;}
        else {
            index++;
            if (answer == "win") {iPlayer++;}
            else if (answer == "lose") {iComputer++;}
        }
    }

    // Display Winner
    console.log(`Player Score: is ${iPlayer}`);
    console.log(`Computer Score: is ${iComputer}`);
}

// Run game
playGame()