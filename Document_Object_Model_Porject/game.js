

//restart button
var restart = document.querySelector('#b');

//grab all squares
var squares= document.querySelectorAll('td');

//clear all squares

function clear_board(){
  for(var i=0 ; i<squares.length;i++){
    squares[i].textContent='';
  }
}

restart.addEventListener('click',clear_board);

function change_marker(){
  if(this.textContent==='X'){
    this.textContent="O";
  }

  else if(this.textContent=='O'){
    this.textContent="";
  }

  else{
    this.textContent="X";
  }
}

for( var i=0; i<squares.length; i++){
  squares[i].addEventListener("click",change_marker);
}
