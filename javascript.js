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
function result(playerChoice, computerChoice) {  
    if(playerChoice === computerChoice){
        return 'tie';
    } 
    if(playerChoice === 'rock'){
        switch (computerChoice){
            case 'paper':
                return 'computer';
            default:
                return'player';
        }
    } else if(playerChoice === 'paper'){
        switch (computerChoice){
            case 'rock':
                return'player';
            default:
                return 'computer';
        }
    } else if(playerChoice === 'scissors'){
        switch (computerChoice){
            case 'rock':
                return 'computer';
            default:
                return 'player';
        }
    }
    
}

function click() {
    const pieces = document.getElementsByClassName('piece')
    let promises = []
    for(const piece of pieces) {
        let newPromise = new Promise((resolve) => {
            piece.addEventListener('click', function eventHandler(e) {
                for(const piece of pieces) {
                    piece.removeEventListener('click', eventHandler)
                }
                resolve(e.currentTarget.dataset.name)
            })
        })
        promises.push(newPromise)
    }
    return Promise.any(promises)
}
const scoreRecord = () => {
    let computer = 0
    let player = 0
    function record(roundResult) {
        switch(roundResult) {
            case 'computer': 
                this.computer++ 
                break 
            case 'player':
                this.player++
                break 
        }
    }
    function winner() {
        if(this.computer > this.player) {
            return 'computer'
        } else if(this.computer < this.player) {
            return 'player'
        } else {
            return 'tie'
        }
    }
    return { record, winner, computer, player }
}
const display = (() => {
    const playerDiv = document.getElementById('player')
    const computerDiv = document.getElementById('computer')
    const roundResultDiv = document.getElementById('round-result')
     
    function round(i) {
        document.querySelector('h2').textContent = `Round: ${i}`
    }
    function start() {
        document.getElementById('game').classList.add('display')
        document.getElementById('winner').textContent = ''
        for(const child of roundResultDiv.children) {
            child.textContent = ''
        }
        for(const child of playerDiv.children) {
            child.classList.remove('display')
        }
        for(const child of computerDiv.children) {
            child.classList.remove('display')
        }
    }
    function result(player, computer, score) {
        for(const child of playerDiv.children) {
            child.classList.remove('display')
        }
        for(const child of computerDiv.children) {
            child.classList.remove('display')
        }
        playerDiv.querySelector(`.${player}`).classList.add('display')
        computerDiv.querySelector(`.${computer}`).classList.add('display')
        
        roundResultDiv.children[0].textContent = `You: ${score.player}`
        roundResultDiv.children[1].textContent = `Computer: ${score.computer}`
    }
    function final(winner) {
        const winnerDiv= document.getElementById('winner')
        switch(winner) {
            case 'computer':
                winnerDiv.textContent = 'Sorry you lost, the computer won!'
                break 
            case 'player':
                winnerDiv.textContent = 'Congratulation, you won the computer!'
                break 
            case 'tie':
                winnerDiv.textContent = 'You and the computer tie!'
        }
    }
    function exit() {
        document.getElementById('game').classList.remove('display')
    }
    return { round, result, final, start, exit  }
})()
async function play() {
    let score = scoreRecord()
    display.start()
    for(let i=1; i<4; i++) {
        display.round(i)
        let playerChoice = await click()
        let computerChoice = getComputerChoice()
        let roundResult = result(playerChoice, computerChoice)
        score.record(roundResult)
        display.result(playerChoice, computerChoice, score)
        if(i===3) {
            let winner = score.winner()
            display.final(winner)
        } 
    }
}
    

const startBtn = document.getElementById('start')
const exitBtn = document.getElementById('exit')
const gameContainer = document.getElementById('game')
exitBtn.addEventListener('click', () => {
    display.exit()
})
startBtn.addEventListener('click', () => {
    play()
})



    



