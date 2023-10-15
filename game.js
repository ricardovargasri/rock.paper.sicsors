var paper = document.querySelector('.paper');
var rock = document.querySelector('.rock');
var scissors = document.querySelector('.scissors');
/* const elementos = ['rock', 'paper', 'scissors']; */

var eleccion = document.querySelector('.resultado .desicion')

var seleccion_paper = paper.addEventListener('click', () => {
    eleccion.textContent = 'ha elegido papel 📖';
});
var seleccion_rock = rock.addEventListener('click', () => {
    eleccion.textContent = 'ha elegido piedra ⛰';
});
var seleccion_scissors = scissors.addEventListener('click', () => {
    eleccion.textContent = 'ha elegido tijera ✂';
});







