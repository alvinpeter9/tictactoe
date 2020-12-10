// SELECTING THE BUTTONS/GLOBAL VARIABLES
let btn = document.querySelectorAll('#btn');
let replay = document.querySelector('#btn1');
let display = document.querySelector('#screen');
var mark = 'X', player = 'Player1';



// WINNER CHECKER
function win_check() {
    return ((btn[6].value === mark && btn[7].value === mark && btn[8].value === mark) || // across the bottom
    (btn[3].value === mark && btn[4].value === mark && btn[5].value === mark) || // across the middle
    (btn[0].value === mark && btn[1].value === mark && btn[2].value === mark) || // across the top
    (btn[6].value === mark && btn[3].value === mark && btn[0].value === mark) || // the middle
    (btn[7].value === mark && btn[4].value === mark && btn[1].value === mark) || // the middle
    (btn[8].value === mark && btn[5].value === mark && btn[2].value === mark) || // the right side
    (btn[6].value === mark && btn[4].value === mark && btn[2].value === mark) || // diagonal
    (btn[8].value === mark && btn[4].value === mark && btn[0].value === mark)) // diagonal
  }

// TIE CHECKER
function tie_checker() {
  return (btn[0].value!== " " && btn[1].value!== " " && btn[2].value!== " " &&
          btn[3].value!== " " && btn[4].value!== " " && btn[5].value!== " " &&
          btn[6].value!== " " && btn[7].value!== " " && btn[8].value!== " ");
        }

//TOGGLE PLAYER FUNCTION
function togglePlayer(){
  if (mark === 'X'){
    mark = 'O';
    player = 'Player2';
    display.innerHTML= ('Player2, your marker is <strong>O</strong> and its your turn to play.');
  }
  else {
    mark = 'X';
    player = 'Player1';
    display.innerHTML= ('Player1, your marker is <strong>X</strong> and its your turn to play.');
  }
}

//FUNCTION TO DISABLE ALL BUTTONS
function disableButtons(){
  for (var a=0; a < btn.length; a++){
    btn[a].disabled=true;
  }
}

//FUNCTION TO RESTART GAMES
function restart(){
  mark = 'X';
  player = 'Player1';
  display.innerHTML= ('Player1, your marker is <strong>X</strong> and its your turn to play.');
  for (var i=0; i < btn.length; i++){
    btn[i].value=" ";
    btn[i].disabled=false;
  }
}

// A FUNCTION TO PLACE MARKER IN THE BOARD AND CHECK FOR WIN/TIE
function place_marker(){
  if (this.value === " "){
    this.value=mark;
    this.disabled=true;
    if (win_check()) {
      display.innerHTML = ('Congratulations! '+player+ ' has won the game.');
      disableButtons()
    }
    else if (tie_checker()) {
      display.innerHTML = ('We have a tie!');
      disableButtons()
    }
    else {
      togglePlayer();
    }
  }
}


//GAME PLAY
for (var i=0; i < btn.length; i++){
  btn[i].addEventListener('click', place_marker);
}
replay.addEventListener('click', restart);
