// const prompt = require("prompt-sync")();

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

    return playerSelection;
    
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

            
        if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
    
            computerScore ++;
            return `You Lose! ${computerChoice} beats ${humanChoice}`;
        }
    
        if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
    
            humanScore ++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }
    
        if (computerChoice === humanChoice){
            return `It's a draw. you both chose ${humanChoice}`
        }
    
    }

    for (let i = 1; i <= 5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));;
        console.log(`Score\nYou: ${humanScore}\nComputer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`You won ${humanScore} - ${computerScore}`);
        alert(`You won ${humanScore} - ${computerScore}`);
    }

    if (humanScore < computerScore) {
        console.log(`You Lose ${computerScore} - ${humanScore}`);
        alert(`You Lose ${computerScore} - ${humanScore}`);
    }

    if (humanScore === computerScore) {
        console.log(`It's a draw ${humanScore} - ${computerScore}`);
        alert(`It's a draw ${humanScore} - ${computerScore}`);
    }

}

playGame();


