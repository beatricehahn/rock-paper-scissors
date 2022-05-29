// this function randomly returns "rock", "paper", or "scissors"
function computerPlay() {
    let move = Math.floor(Math.random()*3) + 1;
    let answer = "";
    switch(move){
        case 1:    
            answer = "rock";
            break;
        case 2:
            answer = "paper";
            break;
        case 3:
            answer = "scissors";
            break;
    }

    let text = `Computer chose: ${answer}`;
    document.getElementById("computer-move").innerHTML = text;
    return answer;
}

// this function plays a single round of rock paper scissors
function oneRound(playerSelection, computerSelection) {
    const playerMove = playerSelection.toLowerCase();
    const compMove = computerSelection.toLowerCase();

    let scoreDisplay = document.querySelector('#score');
    let score = `Player score: ${playerScore} Computer score: ${compScore}`;

    switch(playerMove){
        //if player chooses rock
        case "rock":
            switch(compMove){
                case "rock":
                    document.getElementById("results").innerHTML = "Tie!";
                    score = `Player score: ${playerScore} Computer score: ${compScore}`;
                    scoreDisplay.textContent = score;
                    break;
                case "paper":
                    document.getElementById("results").innerHTML = "Computer wins this round!";
                    compScore+=1;
                    //update score
                    score = `Player score: ${playerScore} Computer score: ${compScore}`;
                    scoreDisplay.textContent = score;
                    break;
                case "scissors":
                    document.getElementById("results").innerHTML = "You win this round!";
                    playerScore+=1;
                    //update score
                    score = `Player score: ${playerScore} Computer score: ${compScore}`;
                    scoreDisplay.textContent = score;
                    break;
            }
            break;
        case "paper":
            switch(compMove){
                case "rock":
                    document.getElementById("results").innerHTML = "You win this round!";
                    playerScore+=1;
                    //update score
                    score = `Player score: ${playerScore} Computer score: ${compScore}`;
                    scoreDisplay.textContent = score;
                    break;
                case "paper":
                    document.getElementById("results").innerHTML = "Tie!";
                    score = `Player score: ${playerScore} Computer score: ${compScore}`;
                    scoreDisplay.textContent = score;
                    break;
                case "scissors":
                    document.getElementById("results").innerHTML = "Computer wins this round!";
                    compScore+=1;
                    //update score
                    score = `Player score: ${playerScore} Computer score: ${compScore}`;
                    scoreDisplay.textContent = score;
                    break;
            }
            break;
        case "scissors":
            switch(compMove){
                case "rock":
                    document.getElementById("results").innerHTML = "Computer wins this round!";
                    compScore+=1;
                    //update score
                    score = `Player score: ${playerScore} Computer score: ${compScore}`;
                    scoreDisplay.textContent = score;
                    break;
                case "paper":
                    document.getElementById("results").innerHTML = "You win this round!";
                    playerScore+=1;
                    //update score
                    score = `Player score: ${playerScore} Computer score: ${compScore}`;
                    scoreDisplay.textContent = score;
                    break;
                case "scissors":
                    document.getElementById("results").innerHTML = "Tie!";
                    score = `Player score: ${playerScore} Computer score: ${compScore}`;
                    scoreDisplay.textContent = score;
                    break;
            }
            break;
    }
}

// this function runs until player or computer scores 5 wins
function game() {
    let playMove = "";
    let compMove ="";

    //buttons is a node list
    const buttons = document.querySelectorAll('button');

    //use .forEach method to iterate through each button
    buttons.forEach((button) => {
        //for each button, add an event listener for click
        button.addEventListener('click', () => {       
            playMove = button.id;
            let text = `You chose: ${playMove}`;
            document.getElementById("player-move").innerHTML = text;
            //generate computer's move
            compMove = computerPlay();
            //initiate round
            oneRound(playMove, compMove);
        });
    });

}

let playerScore = 0;
let compScore = 0;
game();