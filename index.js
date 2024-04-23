// const prompt = require("prompt-sync")();

let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    
    if (choice == 1) {
        return "rock"
    }else if (choice == 2) {
        return "paper"
    }else {
        return "scissors"
    }
}


function getHumanChoice(){
    let wrongChoice = true; 
    alert('Make a choice (use the word): "rock" | "paper" | "scissors"');
    let playerSelection;
    
    
    while (wrongChoice) {

        playerSelection = prompt('"rock" | "paper" | "scissors"').toLowerCase();
        
        if (playerSelection !== ""){
        
            if ( playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
                alert('\nChoose a valid answer! Use the word "rock" | "paper" | "scissors"\n');
                
            }else{

                wrongChoice = false;           
                
            }

        }else{

            alert('\nEmpty choice not acceptable. \nChoose a valid answer! Use the word "rock" | "paper" | "scissors"\n');
        }

    }
    
}

console.log(getHumanChoice());
