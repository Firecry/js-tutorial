
var pwhile = document.getElementById('while');
var pdowhile = document.getElementById('dowhile');
var pfor = document.getElementById('for');

// While

var i = 0;

while (i < 10) {
    pwhile.innerHTML += ` ${i}<br>`;
    i++;
    // break; // hotfix, nie poprawny sposób!!! blokuje pętle
}

// Do While

var j = 0;

do{
    pdowhile.innerHTML += ` ${j}<br>`;
    j++;                                 // najpierw występuje ciało pętli
} while(j < 10);

// For

for(let k = 0; k < 10; k++){
    pfor.innerHTML += ` ${k}<br>`;
}
