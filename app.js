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

function playRound(humanChoice, computerChoice) {

    if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {

        computerScore ++;
        div_results.innerText = `You Lose! ${computerChoice} beats ${humanChoice}`;
    }

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {

        humanScore ++;
        div_results.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    if (computerChoice === humanChoice){
        div_results.innerText = `It's a draw. you both chose ${humanChoice}`
    }

    div_results.innerText = div_results.innerText + `\n${humanScore} - ${computerScore}`

    if (humanScore == 5) {
        div_buttons.innerText = "";
        div_results.innerText = `You Won!\nScore is ${humanScore}-${computerScore}`;
    }

    if (computerScore == 5) {
        div_buttons.innerText = "";
        div_results.innerText = `You Lost :c\nScore is ${computerScore}-${humanScore}`;
    }
}

let humanScore = 0;
let computerScore = 0;


const rock_btn = document.createElement("button");
rock_btn.innerText = "Rock";
rock_btn.addEventListener("click", function(){
    playRound("rock", getComputerChoice());
})

const paper_btn = document.createElement("button");
paper_btn.innerText = "Paper";
paper_btn.addEventListener("click", function(){
    playRound("paper", getComputerChoice());
})

const scissors_btn = document.createElement("button");
scissors_btn.innerText = "Scissors";
scissors_btn.addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
})

const div_buttons = document.createElement("div");


const div_results = document.createElement("div");
div_results.innerText = "Choose your option \nFirst to 5 Wins!";

div_buttons.appendChild(rock_btn);
div_buttons.appendChild(paper_btn);
div_buttons.appendChild(scissors_btn);

const body = document.querySelector("body");
body.appendChild(div_buttons);
body.appendChild(div_results);



