let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let you = document.getElementById('you');
let comp = document.getElementById('computer');
let wins = document.getElementById('winScore'); 
let lose = document.getElementById('loseScore');
let tie = document.getElementById('tieScore');

rock.addEventListener('click', getRock);
rock.addEventListener('click', computer);
paper.addEventListener('click', getPaper);
paper.addEventListener('click', computer);
scissors.addEventListener('click', getScissors);
scissors.addEventListener('click', computer);



function getRock(){
    you.innerHTML = 'Your Selection: <i class="fas fa-hand-rock"></i>';
}

function getPaper(){
    you.innerHTML = 'Your Selection: <i class="fas fa-hand-paper"></i>';
}

function getScissors(){
    you.innerHTML = 'Your Selection: <i class="fas fa-hand-scissors"></i>';
}

function computer(){
    let number = Math.floor(Math.random() * 3);
    if(number === 0){
        comp.innerHTML = 'Computer Selection: <i class="fas fa-hand-rock"></i>';
    }else if(number === 1){
        comp.innerHTML = 'Computer Selection: <i class="fas fa-hand-paper"></i>';
    }else{
        comp.innerHTML = 'Computer Selection: <i class="fas fa-hand-scissors"></i>';
    }
}
