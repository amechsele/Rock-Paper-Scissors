//let playerSelection;
//let computerSelection;
let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    let option = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[option];
    return computerChoice;
}

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
rock.addEventListener('click', function(e){let playerSelection = e.target.innerHTML;
                                            game(playerSelection);
});

paper.addEventListener('click', function(e){let playerSelection = e.target.innerHTML;
    game(playerSelection);
});

scissors.addEventListener('click', function(e){let playerSelection = e.target.innerHTML;
    game(playerSelection);
});

function playRound(playerSel){
    
    const playerSelection = playerSel.toLowerCase();
    const computerSelection = computerPlay().toLowerCase();
    
    if(playerSelection === computerSelection){
        console.log(" A draw");
    }
    else if((playerSelection === "scissors") && (computerSelection === "paper")
         || (playerSelection === "rock") && (computerSelection === "scissors")
        ||  (playerSelection === "paper") && (computerSelection === "rock")){
        playerScore++;
        console.log(`You win!  ${playerSelection} beats ${computerSelection}`);
    }

    else if((playerSelection === "paper") && (computerSelection === "scissors")
       ||(playerSelection === "rock") && (computerSelection === "paper")
       ||(playerSelection === "scissors") && (computerSelection === "rock")){
        computerScore++;
        console.log(`Computer wins!  ${computerSelection} beats ${playerSelection}`);
         //return " Computer wins! Rock beats Scissors";
    }

    else{
        console.log(" Something is not right");
        //return "Something is not right";             
    }
}

function winner(player, computer){
    if (player > computer){
        console.log("Player wins");
    }

    if (player < computer){
        console.log("Computer wins");
    }

    if (player === computer){
        console.log("A draw");
    }
}

function game(playerSel){
        //let playerSelection = prompt("Enter either Rock, Paper or Scissors");
        //let computerSelection = computerPlay();
        playRound(playerSel)
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
    
    
    console.log("Final Player score: " + playerScore);
    console.log("Final Computer score: " + computerScore);
            
    console.log(winner(playerScore, computerScore));
}

//game();