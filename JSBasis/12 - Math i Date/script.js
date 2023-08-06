// Math i Date

var math = document.getElementById('math');
var date = document.getElementById('date');
var czas = document.getElementById('czas');

// Math

// var liczba = prompt("Podaj liczbę:", '0');
var liczba = 3.4;

math.innerHTML += `Liczba: ${liczba}<br>`; // Liczba na której przeprowadzane są operacje

math.innerHTML += `Abs: ${Math.abs(liczba)}<br>`; // Liczba Bezwzględna (Bez Znaku)

math.innerHTML += `Round: ${Math.round(liczba)}<br>`; // Zaokrąglanie do INT

math.innerHTML += `Ceil: ${Math.ceil(liczba)}<br>`; // Zaokrąglanie do wyższej liczby

math.innerHTML += `Floor: ${Math.floor(liczba)}<br>`; // Zaokrąglanie do niższej liczby

math.innerHTML += `Power: ${Math.pow(liczba, 3)}<br>`; // Potęgowanie, zmienna i potęga do której ma być podniesiona liczba

math.innerHTML += `Sqrt: ${Math.sqrt(liczba)}<br>`; // Pierwiastkowanie

math.innerHTML += `Pi: ${Math.round(Math.PI * 1000) / 1000}<br>`; // Liczba PI

math.innerHTML += `Random: ${Math.floor(Math.random() * 10) + 1}<br>`; // Losowa liczba od 1 do 10

// Date

var date1 = new Date(1);
var date2 = new Date(2002, 9, 31, 10, 10, 0)

date.innerHTML += `Current: ${Date()}<br>`; // Zwraca aktualną datę

date.innerHTML += `Date 1: ${date1}<br>`; // Zwraca jedną milisekundę po pierwszej dacie

date.innerHTML += `Date 2: ${date2.getDate()}.${date2.getMonth() + 1}.${date2.getFullYear()}<br>`; // Można podać argumenty, aby uzyskać potrzebny dzień

var time = new Date();
czas.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`

setInterval(()=>{
    var time = new Date();
    czas.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}, 1000)