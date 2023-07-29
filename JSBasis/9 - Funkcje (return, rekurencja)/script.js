// Funkcje cz.2

var result = document.getElementById('result');

// return

function add(a, b){
    return a + b;
}

var sum = add(5 , 3);

result.innerHTML += `Suma = ${sum}<br>`;

// rekurencja // wywołuje funkcję przez samą siebie!

function silnia(n){
    if(n == 1){
        return 1;
    }
    else{
        return n*silnia(n - 1);
    }
}

result.innerHTML += `Silnia = ${silnia(5)}<br>`