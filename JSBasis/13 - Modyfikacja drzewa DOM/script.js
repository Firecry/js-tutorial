// Prosta Gra

var input = document.getElementById('input');
var button = document.getElementById('button');
var answer = document.getElementById('answer');
var list = document.getElementById('list');
var ending = document.getElementById('ending');
var endinginsider = document.getElementById('endinginsider');
var reload = document.getElementById('reload');
var i = 0;

var los = Math.floor(Math.random() * 1000) + 1;

button.addEventListener('click', spr);

function spr(){
    var value = Number(input.value);
    if(Number.isInteger(value) && value >= 1 && value <= 1000){

        i++

        if(los > value){
            answer.innerHTML = "Więcej!";
        }
        else if(los < value){
            answer.innerHTML = "Mniej!";
        }
        else{
            answer.innerHTML = "Udało się!";
            ending.style.width = '100%';
            ending.style.height = '100%';
            document.body.style.overflowY = 'hidden';
            endinginsider.style.display = 'block';
            endinginsider.innerHTML = `
                Udało się!<br>
                Wylosowana liczba: ${value}<br>
                Ilość prób: ${i}<br>
                <button id="reload">Odśwież</button>
            `;
            reload.addEventListener('click', rel);
        }
        
        var li = document.createElement('li');
        list.appendChild(li);
        list.lastChild.innerHTML = value;
    }
    else{
        answer.innerHTML = "Błędna Liczba!";
    }
    
}

function rel(){
    location.reload();
}

// TO DO : STYLE ENDING, MOVIE ENDS ON ELSE ==, MAKE GOOD CLAMPS!!