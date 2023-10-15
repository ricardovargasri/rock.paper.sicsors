var paper = document.querySelector('.paper');
var rock = document.querySelector('.rock');
var scissors = document.querySelector('.scissors');
const elementos = ['rock', 'paper', 'scissors'];



var seleccion_paper = paper.addEventListener('click', () => {
    alert('selecciono papel');
});
var seleccion_rock = rock.addEventListener('click', () => {
    alert('selecciono piedra');
});
var seleccion_scissors = scissors.addEventListener('click', () => {
    alert('selecciono scissors');
});






