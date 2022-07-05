let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    let option = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[option];
    return computerChoice;
}

let buttons = document.querySelectorAll('.button');
let reset = document.querySelector('#resetButton');
let roundResult = document.querySelector("#result");
let playerDisplay = document.querySelector("#playerScore");
let computerDisplay = document.querySelector("#computerScore");
let winnerDisplay = document.querySelector("#winner");

buttons.forEach((button) => 
{button.addEventListener('click', function(e){
    if ((playerScore < 5) && (computerScore < 5)){
        let playerSelection = e.target.innerHTML;
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        playerDisplay.textContent = 'Player score: ' + playerScore;
        computerDisplay.textContent = 'Computer score: ' + computerScore;
        roundResult.textContent = result;
        if (playerScore == 5 || computerScore == 5){
                winnerDisplay.textContent = winner(playerScore, computerScore);
        }
    }
        });
    });

    reset.addEventListener('click', () => {computerScore = 0; playerScore = 0;
        playerDisplay.textContent = 'Player score: ' + playerScore;
        computerDisplay.textContent = 'Computer score: ' + computerScore;
        roundResult.textContent='';
        winnerDisplay.textContent = '';});

    
function playRound(playerSel, computerSel){
    let playerSelection = playerSel.toLowerCase();
    let computerSelection = computerSel.toLowerCase();
    let roundResult;
    
    if(playerSelection === computerSelection){
        roundResult = " A draw";
        return roundResult;
    }
    else if((playerSelection === "scissors") && (computerSelection === "paper")
        || (playerSelection === "rock") && (computerSelection === "scissors")
        || (playerSelection === "paper") && (computerSelection === "rock")){
        playerScore++;
        roundResult = `You win!  ${playerSelection} beats ${computerSelection}`;
        return roundResult;
    }

    else if((playerSelection === "paper") && (computerSelection === "scissors")
       ||(playerSelection === "rock") && (computerSelection === "paper")
       ||(playerSelection === "scissors") && (computerSelection === "rock")){
        computerScore++;
        roundResult = `Computer wins!  ${computerSelection} beats ${playerSelection}`;
        return roundResult;
    }

    else{
        roundResult = " Something is not right";
        return roundResult;            
    }
}

    function winner(player, computer){
        let text;
        if (player > computer){
            text = "Player wins";
        }
        if (player < computer){
            text = "Computer wins";
        }
        if (player === computer){
            text = "A draw";
        }
        return text;
    }