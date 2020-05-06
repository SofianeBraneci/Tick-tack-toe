
var squares = document.querySelectorAll('td')

function clearBoard(){
    for(let i = 0; i<squares.length; i++){
        squares[i].textContent = ' ';
    }
    console.log("Cleared");
}

function fillBoard(){
    for(let i=0; i< squares.length; i++){
        let random = ( Math.random() * 3) + 1;
        console.log(random);
        if(Math.floor(random) % 2 == 0){
            squares[i].textContent = "X";
        }else if(Math.floor(random) % 3 == 0){
            squares[i].textContent = 'O';
        }
    }

}

function change(){
    if (this.textContent == ' '){
        this.textContent = "X";
    }else if(this.textContent == 'X'){
        this.textContent = 'O';
    }
    else{
        this.textContent = " ";
    }

}

for(let i = 0; i< squares.length; i++){
    squares[i].addEventListener('click', change);
}
document.getElementById("fill").addEventListener('click',fillBoard);
document.getElementById("reset").addEventListener('click',clearBoard);

var i = 0
function change2(){
    while(i < squares.length){
        confirm("Proceed ?")
        squares[i].style.color='red';
        i++;
    }
    i = 0;

}

function undo(){
    let i = 0;
        while(i < squares.length){
            squares[i].style.color='#000';
            i++;
        }
    
}

function search(){
    
}