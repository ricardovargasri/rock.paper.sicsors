var countMachine = 0;
var countUser = 0;
const options = ['rock', 'paper', 'sicsors']



function getComputerChoice(){
let x = Math.floor(Math.random() * 3);
return options[x];   
};



function playerSelection() {
    let seleccion = prompt('Choose between rock, paper or sicsors: ')
    return seleccion.toLocaleLowerCase();
};
const userChoice = playerSelection();
const computerChoice = getComputerChoice();
console.log('The user has chosen ' + userChoice + ' and the machine chose ' + computerChoice);
function play(userChoice, computerChoice){
    if(userChoice === 'sicsors' && computerChoice === 'paper'){
        console.log('ganas un punto')
    }
    else if(userChoice === 'rock' && computerChoice === 'sicsors'){
        console.log('ganas un punto')
    }
    else if(userChoice === 'paper' && computerChoice === 'rock'){
        console.log('ganas un punto')
    }
    else if(userChoice === computerChoice){
        console.log('esto es un empate')
    }
    else{
        console.log('la maquina te gana un punto')
    }
    
    
}
play(userChoice, computerChoice);






