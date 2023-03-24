'use strict;'

//Initial variables, getting all the HTML objects to use
const screenDisplay = document.querySelector('.screen');

let clearScreen = document.getElementById('clear');
let deleteScreen = document.getElementById('delete');

let numberSeven = document.getElementById('seven');
let numberEight = document.getElementById('eight');
let numberNine = document.getElementById('nine');

let numberSix = document.getElementById('six');
let numberFive = document.getElementById('five');
let numberFour = document.getElementById('four');

let numberThree = document.getElementById('three');
let numberTwo = document.getElementById('two');
let numberOne = document.getElementById('one');
let numberZero = document.getElementById('zero');

let plus = document.getElementById('plus');
let equal = document.getElementById('equal');
let minus = document.getElementById('minus');
let times = document.getElementById('times');
let divider = document.getElementById('divider');
let dot = document.getElementById('dot');


//functions
//clear button
clearScreen.addEventListener('click', () => {
    screenDisplay.textContent = '';
});

//number displays
numberZero.addEventListener('click', () => {
    screenDisplay.textContent += '0';
});

numberOne.addEventListener('click', () => {
    screenDisplay.textContent += '1';
});

numberTwo.addEventListener('click', () => {
    screenDisplay.textContent += '2';
});

numberThree.addEventListener('click', () => {
    screenDisplay.textContent += '3';
});

numberFour.addEventListener('click', () => {
    screenDisplay.textContent += '4';
});

numberFive.addEventListener('click', () => {
    screenDisplay.textContent += '5';
});

numberSix.addEventListener('click', () => {
    screenDisplay.textContent += '6';
});

numberSeven.addEventListener('click', () => {
    screenDisplay.textContent += '7';
});

numberEight.addEventListener('click', () => {
    screenDisplay.textContent += '8';
});

numberNine.addEventListener('click', () => {
    screenDisplay.textContent += '9';
});


//plus operation
plus.addEventListener('click', ()=>{
    screenDisplay.textContent += '+';
});

//minus operation
minus.addEventListener('click', ()=>{
    screenDisplay.textContent += '-';
});

//times operation
times.addEventListener('click', () => {
    screenDisplay.textContent += 'x';
});

//divider operation
divider.addEventListener('click', () => {
    screenDisplay.textContent += '/';
});

//equal operation
equal.addEventListener('click', () => {
    //try catch of a possible invalid operation
    try 
    {
        screenDisplay.textContent = eval(screenDisplay.textContent.replace('x', '*'));        
    } 
    catch (error) 
    {
        screenDisplay.textContent = '#ERROR';
    }
    
});


//delete button
deleteScreen.addEventListener('click', () => {
    let length = screenDisplay.textContent.length;
    screenDisplay.textContent = screenDisplay.textContent.slice(0, length - 1);
});

//dot button for floats
dot.addEventListener('click', () => {
    screenDisplay.textContent += '.';
});