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

function playRound (playerSelection){  //Play the game one time and return the winner
    let computerSelection = getComputerChoice();
    playerSelection.toLocaleLowerCase();
    if(playerSelection == computerSelection){
        return '';
    } else if(playerSelection == 'rock'){
        switch (computerSelection){
            case 'paper':
                return 'player';
                break;
            default:
                return'computer';
        }

    } else if(playerSelection == 'paper'){
        switch (computerSelection){
            case 'rock':
                return'player';
                break;
            default:
                return 'computer';
        }
    } else {
        switch (computerSelection){
            case 'rock':
                return 'player';
                break;
            default:
                return 'computer';
        }
    }
    
}
function score(result){ //count the score and annouce the winner after each round
                switch(result){
            case 'player':
                playerScore +=1;
                div.textContent ='You just got one score';
                break;
            case 'computer':
                computerScore +=1;
                div.textContent='The computer got one score';
                break;
            default:
                div.textContent='No score for both of you cuz you tie';
                }  
}
let div = document.createElement('div');
    div.style.margin ='50px 0px';
    document.body.appendChild(div);


const buttons = document.querySelectorAll('button');
let n=0;
let computerScore =0;
let playerScore = 0;
buttons.forEach((button) => {
    
    button.addEventListener('click', game) 
});

function game(){    //anounce the final winner
    n++;
    let result = playRound(this.textContent); // e.target.textContent == this.textContent
    if(n<5){
        score(result);     
    }
    else if(n==5) {
        score(result);
        if (playerScore > computerScore){
            div.textContent=`Congratulation! You win! Your score is ${playerScore}`;
        } else if (playerScore < computerScore){
            div.textContent=`Sorry, you lose! Your score is ${playerScore}`;
        } else {
            div.textContent='You tie with the computer!';
        }
    } 
    }      

    



