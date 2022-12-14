function getComputerChoice (){
    let c = Math.floor(Math.random()*3);
    let a;
    switch (c){
        case 0:
            a='Rock';
            break;
        case 1:
            a='Paper';
            break;
        default:
            a='Scissor';
        
    }
    return a;
}