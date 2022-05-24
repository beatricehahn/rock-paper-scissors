// this function randomly returns "rock", "paper", or "scissors"
function computerPlay() {
    let move = Math.floor(Math.random()*3) + 1;
    switch(move){
        case 1:    
        return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
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
                    console.log("tie");
                    break;
                case "paper":
                    console.log("Computer wins this round!");
                    break;
                case "scissors":
                    console.log("You win this round!");
            }
            break;
        case "paper":
            switch(compMove){
                case "rock":
                    console.log("You win this round!");
                    break;
                case "paper":
                    console.log("tie");
                    break;
                case "scissors":
                    console.log("Computer wins this round!");
            }
            break;
        case "scissors":
            switch(compMove){
                case "rock":
                    console.log("Computer wins this round!");
                    break;
                case "paper":
                    console.log("You win this round!");
                    break;
                case "scissors":
                    console.log("tie");
            }
            break;
    }
}

// this function runs 5 rounds of rock paper scissors
function game() {
    //stores player's score
    let playerScore = 0;
    //stores computer's score
    let compScore = 0;

    let playMove = "";
    let compMove ="";

    //loop through 5 times
    for (let i = 0; i < 5; i++) {
        console.log(`entering round ${i+1}`);
        // store current move from player
        playMove = prompt("enter your move");
        //store current move from computer
        compMove = computerPlay();

        //call the single round function
        oneRound(playMove, compMove);
    }
}

//call game function to initiate a 5 round game of rock paper scissors: player vs computer
game();