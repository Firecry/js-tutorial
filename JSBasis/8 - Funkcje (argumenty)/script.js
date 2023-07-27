// Funkcje

var result = document.getElementById('result');

function add(a, b){
    typeof(b) === 'undefined' ? b = 1 : null;
    if(arguments.length < 3){
        result.innerHTML += `${a} + ${b} = ${a + b}<br>`;
    }
    else{
        result.innerHTML += `${a} + ${b} + ${arguments[2]} = ${a + b + arguments[2]}<br>`;
    }
}

add(5);
add(1, 2);
add(3, 5, 4);
