var paper = document.querySelector('.paper');
var rock = document.querySelector('.rock');
var scissors = document.querySelector('.scissors');
const elementos = ['rock', 'paper', 'scissors'];


var eleccion = document.querySelector('.resultado .desicion');

var seleccion_paper = paper.addEventListener('click', () => {
    var eleccionUsuario = 'paper';
    determinarResultado(eleccionUsuario);
});
var seleccion_rock = rock.addEventListener('click', () => {
    var eleccionUsuario = 'rock';
    determinarResultado(eleccionUsuario);
});
var seleccion_scissors = scissors.addEventListener('click', () => {
    var eleccionUsuario = 'scissors';
    determinarResultado(eleccionUsuario);
});


function determinarResultado(eleccionUsuario) {
    var maquinaEleccion = elementos[Math.floor(Math.random() * 2)]
    if(eleccionUsuario === maquinaEleccion) {
        eleccion.textContent = 'hay un empate'
    } else if(
      (maquinaEleccion === 'rock' && eleccionUsuario === 'paper')|| 
      (maquinaEleccion === 'paper' && eleccionUsuario === 'scissors')|| 
      (maquinaEleccion === 'scissors' && eleccionUsuario === 'rock') 
      ) {
    eleccion.textContent = 'haz ganado'}
    else{
   eleccion.textContent = 'haz perdido' 
}
};









