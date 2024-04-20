const prompt = require("prompt-sync")();


function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    
    if (choice == 1) {
        return "Rock"
    }else if (choice == 2) {
        return "Paper"
    }else {
        return "Scissors"
    }
}


function rockPaperScissors(computerChoice){
    let wrongChoice = true; 
    console.log('Make a choice (use the word): "rock" | "paper" | "scissors"');
    let playerSelection;
    
    
    while (wrongChoice) {

        playerSelection = prompt("-->").toLowerCase();
        
        if (playerSelection !== ""){
        
            if ( playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
                console.log('\nChoose a valid answer! Use the word "rock" | "paper" | "scissors"\n');
                
            }else{

                wrongChoice = false;           
                
            }

        }else{

            console.log('\nEmpty choice not acceptable. \nChoose a valid answer! Use the word "rock" | "paper" | "scissors"\n');
        }
        

    }
    
}

rockPaperScissors(getComputerChoice());

