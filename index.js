let opt = ['rock', 'paper', 'scissor']; //declare an array

function getComputerChoice(){
    let options = opt[Math.floor(Math.random() * opt.length)]; //to generate a random picking of variable 'opt'
    return options; 
}

function checkWinner(playerSelection, computerSelection){ //function that checks who'll be the winner
    if(playerSelection == computerSelection){ // if it is equal, it is tie. (eg. rock vs rock)
        return 'Tie';
    }
    else if( //if these condition has met, the Player would be the winner
            (playerSelection == 'rock' && computerSelection == 'scissor')|| 
            (playerSelection == 'paper' && computerSelection == 'rock')||
            (playerSelection == 'scissor' && computerSelection == 'paper')
    ){
        return 'Player';
    }
    else{ //if not, then the Computer would be the winner
        return 'Computer';
    }
}

function playRound(playerSelection, computerSelection) { //function who wins in a particular round (round 1 - 5)
    const result = checkWinner(playerSelection, computerSelection); //passing the reference of the function CheckWinner to a variable 'result'
    if(result == 'Tie'){//if the result is equal, then it is tie
        return 'Tie!'
    }
    else if(result == 'Player'){ //if the result is equal to player, player wins the round 
        return `You Won! ${playerSelection} beat ${computerSelection}`;
    }
    else{ //if not, then the computer wins the round
        return `You Lose! ${computerSelection} beat ${playerSelection}`;
    }
  }

function playerInput(){
    let input = true;          
     while(input == true){  /*while the input is true, the loop will continue 
                                until the condition hasn't met.*/
        let choices = prompt('Rock | Paper | Scissor');  // the choices would show in a prompt
        if (choices == null){ /* if the choices or input is empty
                                the loop won't stop*/
            continue;  
        }
        else{
            const optInLower = choices.toLowerCase(); //so that the answer may type into upper or lower. Anything between the two.
            if(opt.includes(optInLower)){ //if the choice inputted is inside the array/given choices / (if it is true)
                input = false;   //the loop will stop.
                return optInLower; // the choice would return either in uppercase or lower.
            }
        }
    }
}

function game(){ //function that generates the 5 round the game Rock Paper and Scissor

    let playerScore = 0; //serve as the counter for the score of the player and computer
    let computerScore = 0;
    console.log('Game Begins!');

    for(let i = 0; i < 5; i++){ //by 5 rounds, the loop would start from 0 to 5, then increment if condition has met.
        const playerSelection = playerInput(); 
        const computerSelection = getComputerChoice(); 
        console.log(`Round ${i+1}`); //it generate the number of round until it counts up to 5 
        console.log(playRound(playerSelection, computerSelection));
        
        if(checkWinner(playerSelection, computerSelection) == 'Player'){ 
            playerScore++; //score added
            console.log(`SCORE :${playerScore} - ${computerScore}`); //it will print the score of the game
        }
        else if(checkWinner(playerSelection, computerSelection) == 'Computer'){
            computerScore++;
            console.log(`SCORE :${playerScore} - ${computerScore}`);
        }
        else{
            console.log(`SCORE :${playerScore} - ${computerScore}`);
        }
        console.log('---------');
    }
    console.log('*********')
    console.log('Game Over');
    if(playerScore > computerScore){
        console.log('You Won the game! Great Job!');
    }
    else if(playerScore < computerScore){
         console.log('You Lose the game! Try Again!');
    }
    else{
        console.log('The game is Draw!');
    }
}

//calling the main function of the program.
game();