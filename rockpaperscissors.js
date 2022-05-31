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
    let score = `Player: ${playerScore}  Computer: ${compScore}`;

    switch(playerMove){
        //if player chooses rock
        case "rock":
            switch(compMove){
                case "rock":
                    document.getElementById("results").innerHTML = "Tie!";
                    score = `Player: ${playerScore}  Computer: ${compScore}`;
                    scoreDisplay.textContent = score;
                    break;

                case "paper":
                    document.getElementById("results").innerHTML = "Computer wins this round!";
                    compScore+=1;
                    // if this is the final round
                    if (playerScore == 5 || compScore == 5){
                        document.getElementById("results").innerHTML = "Game Over!"
                        let finalResult ="";
                        //player is overall winner
                        if (playerScore > compScore) {
                            finalResult = `You win overall, with  ${playerScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //computer winsoverall
                        else if (playerScore < compScore) {
                            finalResult =  `Computer wins overall, with ${compScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //tie
                        else {
                            finalResult = `Tie overall, ${playerScore} to ${compScore}`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                    }

                    else {
                        //update score
                        score = `Player: ${playerScore}  Computer: ${compScore}`;
                        scoreDisplay.textContent = score;
                    }
                    break;

                case "scissors":
                    document.getElementById("results").innerHTML = "You win this round!";
                    playerScore+=1;

                    if (playerScore == 5 || compScore == 5){
                        document.getElementById("results").innerHTML = "Game Over!"
                        let finalResult ="";
                        //player is overall winner
                        if (playerScore > compScore) {
                            finalResult = `You win overall, with  ${playerScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //computer winsoverall
                        else if (playerScore < compScore) {
                            finalResult =  `Computer wins overall, with ${compScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //tie
                        else {
                            finalResult = `Tie overall, ${playerScore} to ${compScore}`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                    }
                    else {
                        //update score
                        score = `Player: ${playerScore}  Computer: ${compScore}`;
                        scoreDisplay.textContent = score;
                    }
                    break;
            }
            break;
        case "paper":
            switch(compMove){
                case "rock":
                    document.getElementById("results").innerHTML = "You win this round!";
                    playerScore+=1;
                    // if this is the final round
                    if (playerScore == 5 || compScore == 5){
                        document.getElementById("results").innerHTML = "Game Over!"
                        let finalResult ="";
                        //player is overall winner
                        if (playerScore > compScore) {
                            finalResult = `You win overall, with  ${playerScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //computer winsoverall
                        else if (playerScore < compScore) {
                            finalResult =  `Computer wins overall, with ${compScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //tie
                        else {
                            finalResult = `Tie overall, ${playerScore} to ${compScore}`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                    }

                    else {
                        //update score
                        score = `Player: ${playerScore}  Computer: ${compScore}`;
                        scoreDisplay.textContent = score;
                    }
                    break;

                case "paper":
                    document.getElementById("results").innerHTML = "Tie!";
                    score = `Player: ${playerScore}  Computer: ${compScore}`;
                    scoreDisplay.textContent = score;
                    break;

                case "scissors":
                    document.getElementById("results").innerHTML = "Computer wins this round!";
                    compScore+=1;
                    // if this is the final round
                    if (playerScore == 5 || compScore == 5){
                        document.getElementById("results").innerHTML = "Game Over!"
                        let finalResult ="";
                        //player is overall winner
                        if (playerScore > compScore) {
                            finalResult = `You win overall, with  ${playerScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //computer winsoverall
                        else if (playerScore < compScore) {
                            finalResult =  `Computer wins overall, with ${compScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //tie
                        else {
                            finalResult = `Tie overall, ${playerScore} to ${compScore}`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                    }

                    else {
                        //update score
                        score = `Player: ${playerScore}  Computer: ${compScore}`;
                    }
                    scoreDisplay.textContent = score;
                    break;
            }
            break;
        case "scissors":
            switch(compMove){
                case "rock":
                    document.getElementById("results").innerHTML = "Computer wins this round!";
                    compScore+=1;
                    // if this is the final round
                    if (playerScore == 5 || compScore == 5){
                        document.getElementById("results").innerHTML = "Game Over!"
                        let finalResult ="";
                        //player is overall winner
                        if (playerScore > compScore) {
                            finalResult = `You win overall, with  ${playerScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //computer winsoverall
                        else if (playerScore < compScore) {
                            finalResult =  `Computer wins overall, with ${compScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //tie
                        else {
                            finalResult = `Tie overall, ${playerScore} to ${compScore}`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                    }

                    else {
                        //update score
                        score = `Player: ${playerScore}  Computer: ${compScore}`;
                        scoreDisplay.textContent = score;
                    }
                    break;

                case "paper":
                    document.getElementById("results").innerHTML = "You win this round!";
                    playerScore+=1;
                    // if this is the final round
                    if (playerScore == 5 || compScore == 5){
                        document.getElementById("results").innerHTML = "Game Over!"
                        let finalResult ="";
                        //player is overall winner
                        if (playerScore > compScore) {
                            finalResult = `You win overall, with  ${playerScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //computer winsoverall
                        else if (playerScore < compScore) {
                            finalResult =  `Computer wins overall, with ${compScore} wins!`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                        //tie
                        else {
                            finalResult = `Tie overall, ${playerScore} to ${compScore}`;
                            document.getElementById("score").innerHTML = finalResult;
                        }
                    }

                    else {
                        //update score
                        score = `Player: ${playerScore}  Computer: ${compScore}`;
                        scoreDisplay.textContent = score;
                    }
                    break;

                case "scissors":
                    document.getElementById("results").innerHTML = "Tie!";
                    score = `Player: ${playerScore}  Computer: ${compScore}`;
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
    const buttons = document.querySelectorAll('.choice');

    //use .forEach method to iterate through each button
    buttons.forEach((button) => {
        //for each button, add an event listener for click
        button.addEventListener('click', () => {       
            //initiate round after checking no winning player
            if (playerScore < 5 && compScore < 5){
                playMove = button.id;
                let text = `You chose: ${playMove}`;
                document.getElementById("player-move").innerHTML = text;
                //generate computer's move
                compMove = computerPlay();
                //initiate one round of rps
                oneRound(playMove, compMove);
            }
            else {
                document.getElementById("results").innerHTML = "Game Over!"
                let finalResult ="";
                //player is overall winner
                if (playerScore > compScore) {
                    finalResult = `You win overall, with  ${playerScore} wins!`;
                    document.getElementById("score").innerHTML = finalResult;
                }
                //computer winsoverall
                else if (playerScore < compScore) {
                    finalResult =  `Computer wins overall, with ${compScore} wins!`;
                    document.getElementById("score").innerHTML = finalResult;
                }
                //tie
                else {
                    finalResult = `Tie overall, ${playerScore} to ${compScore}`;
                    document.getElementById("score").innerHTML = finalResult;
                }
            }
        });
    });

    //replay button resets all display text
    const replayBtn = document.querySelector('#replay-btn');
    replayBtn.addEventListener('click', () => {
        //reset player score
        playerScore = 0;
        //reset computer score
        compScore = 0;
        //reset all choice texts
        document.getElementById("player-move").innerHTML = "";
        document.getElementById("computer-move").innerHTML = "";
        document.getElementById("score").innerHTML = "";
        //reset results display text
        document.getElementById("results").innerHTML = "";
    });
}

let playerScore = 0;
let compScore = 0;
game();