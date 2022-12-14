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
let computerSelection = getComputerChoice();
let playerSelection = prompt('Rock, paper or scissors?');

function playRound (playerSelection, computerSelection){
    playerSelection.toLocaleLowerCase();
    if(playerSelection == computerSelection){
        return 'We tie'
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