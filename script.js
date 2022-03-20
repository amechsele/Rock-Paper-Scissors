let computerChoice;
       let playerChoice;

       let computerScore = 0;
       let playerScore = 0;

       function computerPlay(){
           let choices = ["Rock", "Paper", "Scissors"];
           let option = Math.floor(Math.random() * 3);
           computerChoice = choices[option];
           return computerChoice;
       }

      function playRound(playerSelection, computerSelection){
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();

            if(playerSelection === computerSelection){
                return " A draw";
            }
            if((playerSelection === "scissors") && (computerSelection === "paper")){
                playerScore++;
                return " You win! Scissors beats Paper";
            }
            if((playerSelection === "paper") && (computerSelection === "scissors")){
                computerScore++
                return " Computer wins! Scissors beats Paper";
            }
            if((playerSelection === "paper") && (computerSelection === "rock")){
                playerScore++;
                return " You win! Paper beats Rock";
            }
            if((playerSelection === "rock") && (computerSelection === "paper")){
                computerScore++;
                return " Computer wins! Paper beats Rock";
            }
            if((playerSelection === "rock") && (computerSelection === "scissors")){
                playerScore++;
                return " You win! Rock beats Scissors";
            }
            if((playerSelection === "scissors") && (computerSelection === "rock")){
                computerScore++;
                return " Computer wins! Rock beats Scissors";
            }
            else{
                return "Something is not right";
            }

       }

       /*const playerSelection = "Rock";
       const computerSelection = computerPlay();

       console.log("Player is : " + playerSelection);
       console.log("Computer is : " + computerSelection);

       console.log(playRound(playerSelection, computerSelection));
*/
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

       function game(){
            for(let i = 0; i < 5; i++){
                let playerSelection = prompt("Enter either Rock, Paper or Scissors");
                let computerSelection = computerPlay();
                playRound(playerSelection, computerSelection)
                console.log("Player score: " + playerScore);
                console.log("Computer score: " + computerScore);
            }
            console.log("Final Player score: " + playerScore);
            console.log("Final Computer score: " + computerScore);
            
            console.log(winner(playerScore, computerScore));
       }
       
       console.log(game());