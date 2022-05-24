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
