let isPlayerOne = true;
let finalizado = false;
let cells = document.getElementsByClassName("cell");


for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click',userMove);
}

function userMove(e){

    if(finalizado == false){
        let cellValue = e.target.innerHTML;
        if(!cellValue.length){
            e.target.innerHTML = isPlayerOne ? 'x' : 'o';
            isPlayerOne = !isPlayerOne;
    
            checkline(0, 1, 2);
            checkline(3, 4, 5);
            checkline(6, 7, 8);
            checkline(0, 3, 6);
            checkline(1, 4, 7);
            checkline(2, 5, 8);
            checkline(0, 4, 8);
            checkline(6, 4, 2);
        }
    }

}


function checkline(c1,c2,c3){

    if(cells[c1].innerHTML.length &&
        cells[c1].innerHTML == cells[c2].innerHTML && 
        cells[c2].innerHTML ==  cells[c3].innerHTML
        ){
            showWinner(cells[c1].innerHTML);
    }
}

function showWinner(player){
    console.log(player);
    document.querySelector('#result').innerHTML = 'El ganador es: ' + player ;
    finalizado = true;
}


const btn_reiniciar = document.querySelector('#reiniciar');

btn_reiniciar.addEventListener('click',reiniciar);

function reiniciar(){
    finalizado = false;
    result.innerHTML = '';

    for(let i = 0; i < cells.length; i++){
        cells[i].innerHTML = '';
    }
}

