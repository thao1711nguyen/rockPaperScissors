function getComputerChoice (){
    let c = Math.floor(Math.random()*3);
    let a;
    switch (c){
        case 0:
            a='rock';
            break;
        case 1:
            a='paper';
            break;
        default:
            a='scissors';
        
    }
    return a;
}

function playRound (){
    let playerSelection = prompt('Rock, paper or scissors?');
    let computerSelection = getComputerChoice();
    playerSelection.toLocaleLowerCase();
    if(playerSelection == computerSelection){
        return 'We tie';
    } else if(playerSelection == 'rock'){
        switch (computerSelection){
            case 'paper':
                return 'You win!';
                break;
            default:
                return 'You lose!';
        }

    } else if(playerSelection == 'paper'){
        switch (computerSelection){
            case 'rock':
                return 'You win!';
                break;
            default:
                return 'You lose!';
        }
    } else {
        switch (computerSelection){
            case 'rock':
                return 'You lose!';
                break;
            default:
                return 'You win!';
        }
    }
    
}
function game(){
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i <5 ; i++){
        let result = playRound();
        switch(result){
            case 'You win!':
                playerScore +=1;
                console.log('Congratulation! You just got one score');
                break;
            case 'You lose!':
                computerScore +=1;
                console.log('Sorry, you lose so the computer got one score');
                break;
            default:
                console.log('No score for both of you cuz you tie');
        }
    }
    if (playerScore > computerScore){
        console.log(`Congratulation! You win! Your score is ${playerScore}`);

    } else {
        console.log(`Sorry, you lose! Your score is ${playerScore}`);
    } 
}