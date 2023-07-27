// Instrukcie skoku

var box = document.getElementById('continue');
var box2 = document.getElementById('break');

// Continue
loop1:
for(let j = 0;j < 3; j++){
    loop2:
    for(let i = 0; i < 10; i++){
        // box.innerHTML += `-<br>`;
        if(i > 5){
            continue loop2;
        }
        if(i % 2 == 1){
            continue;
        }
        box.innerHTML += `${j} - ${i}<br>`;
    }
}


// Break
top:
for(let j = 0; j < 3; j++){
    inner:
    for(let i = 0; i < 10; i++){
        if(i == 5){
            break top;
        }
        box2.innerHTML += `${j} - ${i}<br>`;
    }
}

skip:{
    alert('Warning!');
    break skip;
    alert('Skip!')
}