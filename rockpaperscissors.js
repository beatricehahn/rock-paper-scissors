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
    switch(playerMove){
        //if player chooses rock
        case "rock":
            switch(compMove){
                case "rock":
                    document.getElementById("results").innerHTML = "Tie!";
                    break;
                case "paper":
                    document.getElementById("results").innerHTML = "Computer wins this round!";
                    break;
                case "scissors":
                    document.getElementById("results").innerHTML = "You win this round!";
                    break;
            }
        case "paper":
            switch(compMove){
                case "rock":
                    document.getElementById("results").innerHTML = "You win this round!";
                    break;
                case "paper":
                    document.getElementById("results").innerHTML = "Tie!";
                    break;
                case "scissors":
                    document.getElementById("results").innerHTML = "Computer wins this round!";
            }
            break;
        case "scissors":
            switch(compMove){
                case "rock":
                    document.getElementById("results").innerHTML = "Computer wins this round!";
                    break;
                case "paper":
                    document.getElementById("results").innerHTML = "You win this round!";
                    break;
                case "scissors":
                    document.getElementById("results").innerHTML = "Tie!";
            }
            break;
    }
}

// this function runs until player or computer scores 5 wins
function game() {
    //stores player's score
    let playerScore = 0;
    //stores computer's score
    let compScore = 0;

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

game();