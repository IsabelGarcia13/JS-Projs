'use strict;'

const topLeft = document.querySelector('.top-left');
const topMid = document.querySelector('.top-mid');
const topRight = document.querySelector('.top-right');

const midLeft = document.querySelector('.mid-left');
const mid = document.querySelector('.mid');
const midRight = document.querySelector('.mid-right');

const bottomLeft = document.querySelector('.bottom-left');
const bottomMid = document.querySelector('.bottom-mid');
const bottomRight = document.querySelector('.bottom-right');

const playerX = document.querySelector('.left');
const playerO = document.querySelector('.right');

// const switchPlayer = document.querySelector('.switch');
const startOver = document.querySelector('.start-over');

const winner = document.querySelector('.winner');
const title = document.querySelector('.title');

const init = () => {
    topLeft.textContent = '';
    topMid.textContent = '';
    topRight.textContent = '';
    midLeft.textContent = '';
    mid.textContent = '';
    midRight.textContent = '';
    bottomLeft.textContent = '';
    bottomMid.textContent = '';
    bottomRight.textContent = '';
    playerX.textContent= 'X';
    playerO.textContent= 'O';
    playerX.classList.add('active');
    playerO.classList.remove('active');
    winner.style.visibility = 'hidden';
};
init();

const switchPlayer = () =>{
    playerX.classList.toggle('active');
    playerO.classList.toggle('active');
};

// switchPlayer.addEventListener('click', ()=> {
//     playerX.classList.toggle('active');
//     playerO.classList.toggle('active');
// });

startOver.addEventListener('click', ()=> {
    init();
});

topLeft.addEventListener('click', ()=> {
    if(playerX.classList.contains('active')){
        topLeft.textContent = 'x';
    } else if (playerO.classList.contains('active')){
        topLeft.textContent = 'o';
    };
    whoWins();
    switchPlayer();
});

topMid.addEventListener('click', ()=> {
    if(playerX.classList.contains('active')){
        topMid.textContent = 'x';
    } else if (playerO.classList.contains('active')){
        topMid.textContent = 'o';
    };
    whoWins();
    switchPlayer();
});

topRight.addEventListener('click', ()=> {
    if(playerX.classList.contains('active')){
        topRight.textContent = 'x';
    } else if (playerO.classList.contains('active')){
        topRight.textContent = 'o';
    };
    whoWins();
    switchPlayer();
});

midLeft.addEventListener('click', ()=> {
    if(playerX.classList.contains('active')){
        midLeft.textContent = 'x'
    } else if (playerO.classList.contains('active')){
        midLeft.textContent = 'o';
    };
    whoWins();
    switchPlayer();
});

mid.addEventListener('click', ()=> {
    if(playerX.classList.contains('active')){
        mid.textContent = 'x'
    } else if (playerO.classList.contains('active')){
        mid.textContent = 'o';
    };
    whoWins();
    switchPlayer();
});

midRight.addEventListener('click', ()=> {
    if(playerX.classList.contains('active')){
        midRight.textContent = 'x'
    } else if (playerO.classList.contains('active')){
        midRight.textContent = 'o';
    };
    whoWins();
    switchPlayer();
});

bottomRight.addEventListener('click', ()=> {
    if(playerX.classList.contains('active')){
        bottomRight.textContent = 'x';
    } else if (playerO.classList.contains('active')){
        bottomRight.textContent = 'o';
    };
    whoWins();
    switchPlayer();
});

bottomMid.addEventListener('click', ()=> {
    if(playerX.classList.contains('active')){
        bottomMid.textContent = 'x';
    } else if (playerO.classList.contains('active')){
        bottomMid.textContent = 'o';
    };
    whoWins();
    switchPlayer();
});

bottomLeft.addEventListener('click', ()=> {
    if(playerX.classList.contains('active')){
        bottomLeft.textContent = 'x';
    } else if (playerO.classList.contains('active')){
        bottomLeft.textContent = 'o';
    };
    whoWins();
    switchPlayer();
});

const whoWins = function() {
    if(topLeft.textContent === 'x' && topMid.textContent === 'x' &&  topRight.textContent === 'x') { //1
        winner.style.visibility = 'visible';
        title.textContent = 'Player x wins!';
    } else if (topLeft.textContent === 'x' && midLeft.textContent === 'x' && bottomLeft.textContent === 'x') { //2
       winner.style.visibility = 'visible';
       title.textContent = 'Player x wins!';
    } else if (topLeft.textContent === 'x' && mid.textContent === 'x' && bottomRight.textContent === 'x') { //3
        winner.style.visibility = 'visible';
        title.textContent = 'Player x wins!';
    } else if (topRight.textContent === 'x' && mid.textContent === 'x' && bottomLeft.textContent === 'x') { //4
        winner.style.visibility = 'visible';
        title.textContent = 'Player x wins!';
    } else if (topRight.textContent === 'x' && midRight.textContent === 'x' && bottomRight.textContent === 'x') { //5
       winner.style.visibility = 'visible';
       title.textContent = 'Player x wins!';
    } else if (topMid.textContent === 'x' && mid.textContent === 'x' && bottomMid.textContent === 'x') { //6
        winner.style.visibility = 'visible';
        title.textContent = 'Player x wins!';
    } else if (midLeft.textContent === 'x' && mid.textContent === 'x' && midRight.textContent === 'x') { //7
        winner.style.visibility = 'visible';
        title.textContent = 'Player x wins!';
    } else if (bottomLeft.textContent === 'x' && bottomMid.textContent === 'x' && bottomRight.textContent === 'x') { //8
        winner.style.visibility = 'visible';
        title.textContent = 'Player x wins!';
    } else if(topLeft.textContent === 'o' && topMid.textContent === 'o' &&  topRight.textContent === 'o') { //1
        winner.style.visibility = 'visible';
        title.textContent = 'Player o wins!';
    } else if (topLeft.textContent === 'o' && midLeft.textContent === 'o' && bottomLeft.textContent === 'o') { //2
        winner.style.visibility = 'visible';
        title.textContent = 'Player o wins!';
    } else if (topLeft.textContent === 'o' && mid.textContent === 'o' && bottomRight.textContent === 'o') { //3
        winner.style.visibility = 'visible';
        title.textContent = 'Player o wins!';
    } else if (topRight.textContent === 'o' && mid.textContent === 'o' && bottomLeft.textContent === 'o') { //4
        winner.style.visibility = 'visible';
        title.textContent = 'Player o wins!';
    } else if (topRight.textContent === 'o' && midRight.textContent === 'o' && bottomRight.textContent === 'o') { //5
        winner.style.visibility = 'visible';
        title.textContent = 'Player o wins!';
    } else if (topMid.textContent === 'o' && mid.textContent === 'o' && bottomMid.textContent === 'o') { //6
        winner.style.visibility = 'visible';
        title.textContent = 'Player o wins!';
    } else if (midLeft.textContent === 'o' && mid.textContent === 'o' && midRight.textContent === 'o') { //7
        winner.style.visibility = 'visible';
        title.textContent = 'Player o wins!';
    } else if (bottomLeft.textContent === 'o' && bottomMid.textContent === 'o' && bottomRight.textContent === 'o') { //8
        winner.style.visibility = 'visible';
        title.textContent = 'Player o wins!';
    } else {
        if (
            topLeft.textContent != '' && topMid.textContent != '' && topRight.textContent != '' &&
            midLeft.textContent != '' && mid.textContent != '' && midRight.textContent != '' &&
            bottomLeft.textContent != '' && bottomMid.textContent != '' && bottomRight.textContent != ''
        ) {             
            title.textContent = 'DRAW';
            winner.style.visibility = 'visible';  
        };
    };
};

